// src/utils/Mouse_helper.ts
import { Page } from '@playwright/test';

/**
 * showMouse(page)
 * - Injects a bright red cursor into the page (after load)
 * - Listens to click/input/focus/hover/scroll to move & pulse the cursor
 * - Re-injects on navigation
 *
 * Usage: call once per test (preferably right AFTER page.goto)
 *   await showMouse(page);
 */
export async function showMouse(page: Page): Promise<void> {
    // Inject once immediately (safe append when body ready) and re-inject on navigation
    await injectCursorAndListeners(page);
    page.on('framenavigated', async () => {
        try { await injectCursorAndListeners(page); } catch (e) { /* ignore */ }
    });

    // Also patch page.mouse so mouse.* calls move/pulse the cursor
    const origMove = page.mouse.move.bind(page.mouse);
    const origClick = page.mouse.click.bind(page.mouse);
    page.mouse.move = async (x: number, y: number, opts?: any) => {
        await page.evaluate(({ x, y }) => {
            const c = document.getElementById('pw-cursor-auto');
            if (c) { c.style.left = `${x}px`; c.style.top = `${y}px`; }
        }, { x, y });
        return origMove(x, y, opts);
    };
    page.mouse.click = async (x: number, y: number, opts?: any) => {
        await page.evaluate(({ x, y }) => {
            const c = document.getElementById('pw-cursor-auto');
            if (c) {
                c.style.left = `${x}px`; c.style.top = `${y}px`;
                c.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.6)' }, { transform: 'scale(1)' }], { duration: 220 });
            }
        }, { x, y });
        return origClick(x, y, opts);
    };
}

async function injectCursorAndListeners(page: Page) {
    await page.evaluate(() => {
        // avoid duplicate
        if (document.getElementById('pw-cursor-auto')) return;

        // create cursor
        const cursor = document.createElement('div');
        cursor.id = 'pw-cursor-auto';
        Object.assign(cursor.style, {
            position: 'fixed',
            width: '18px',
            height: '18px',
            background: 'red',
            borderRadius: '50%',
            border: '2px solid white',
            boxShadow: '0 0 14px 6px rgba(255,0,0,0.9)',
            pointerEvents: 'none',
            zIndex: '2147483647',
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.06s linear, top 0.06s linear, transform 0.12s ease',
        });
        // safe append
        if (document.body) document.body.appendChild(cursor);
        else document.addEventListener('DOMContentLoaded', () => document.body.appendChild(cursor), { once: true });

        // helper to center cursor on element and pulse with given color
        function pulseAtElement(el: Element | null, type = 'click') {
            if (!el) return;
            const r = el.getBoundingClientRect();
            const x = r.left + r.width / 2;
            const y = r.top + r.height / 2;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;

            // color choices: click=red, fill=lime, hover=gold
            let color = 'red';
            if (type === 'fill') color = 'limegreen';
            if (type === 'hover') color = 'gold';

            const origBg = cursor.style.background;
            cursor.style.background = color;
            cursor.style.boxShadow = `0 0 14px 6px ${color}`;
            // animate scale
            cursor.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.6)' }, { transform: 'scale(1)' }], { duration: 220 });

            // restore color quickly
            setTimeout(() => {
                cursor.style.background = origBg;
                cursor.style.boxShadow = `0 0 14px 6px rgba(255,0,0,0.9)`;
            }, 300);
        }

        // DOM-level listeners (these cover locator.click(), fill(), hover())
        document.addEventListener('click', (ev) => pulseAtElement(ev.target as Element, 'click'), true);
        document.addEventListener('pointerdown', (ev) => pulseAtElement(ev.target as Element, 'click'), true);
        document.addEventListener('input', (ev) => pulseAtElement(ev.target as Element, 'fill'), true);
        document.addEventListener('focusin', (ev) => pulseAtElement(ev.target as Element, 'fill'), true);
        document.addEventListener('mouseover', (ev) => pulseAtElement(ev.target as Element, 'hover'), true);
        document.addEventListener('scroll', () => {
            // coarse feedback on scroll — center pulse
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            cursor.style.left = `${centerX}px`; cursor.style.top = `${centerY}px`;
            cursor.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.4)' }, { transform: 'scale(1)' }], { duration: 220 });
        }, true);

        // patch element.focus() and element.click() so programmatic calls also pulse
        const origFocus = (HTMLElement.prototype as any).focus;
        (HTMLElement.prototype as any).focus = function (...args: any[]) {
            try { pulseAtElement(this, 'fill'); } catch { }
            return origFocus.apply(this, args);
        };
        const origClick = (HTMLElement.prototype as any).click;
        (HTMLElement.prototype as any).click = function (...args: any[]) {
            try { pulseAtElement(this, 'click'); } catch { }
            return origClick.apply(this, args);
        };

        // done
        console.debug('pw-cursor-auto injected');
    });
}
