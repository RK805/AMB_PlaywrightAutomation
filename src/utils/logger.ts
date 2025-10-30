import { createLogger, format, transports } from 'winston';
import path from 'path';
import fs from 'fs';

const logDir = path.resolve(__dirname, '../../logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

// ✅ Create or clear current.log before each run
const currentLogPath = path.join(logDir, 'current.log');
try {
    if (fs.existsSync(currentLogPath)) {
        fs.truncateSync(currentLogPath, 0); // empty file
    } else {
        fs.writeFileSync(currentLogPath, ''); // create new
    }
    console.log('🧹 Cleared old current.log');
} catch (err) {
    console.error('❌ Failed to clear current.log:', err);
}

const commonFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.printf(({ timestamp, level, message, stack }) =>
        `[${timestamp}] ${level.toUpperCase()}: ${stack || message}`
    )
);

const logger = createLogger({
    level: 'info',
    format: commonFormat,
    transports: [
        // 🖥️ Console output (always visible)
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.colorize({ all: true }),
                format.printf(({ level, message }) => `${level}: ${message}`)
            )
        }),

        // 🧹 Current run log (reset every run)
        new transports.File({
            filename: currentLogPath,
            level: 'info',
            format: commonFormat
        }),

        // ✅ Pass logs (info only)
        new transports.File({
            filename: path.join(logDir, 'pass.log'),
            level: 'info',
            format: commonFormat
        }),

        // ⚠️ Combined warn + error logs
        new transports.File({
            filename: path.join(logDir, 'error_warn.log'),
            level: 'warn', // includes warn + error
            format: commonFormat
        }),

        // 🧾 Persistent test log (everything)
        new transports.File({
            filename: path.join(logDir, 'test.log'),
            level: 'silly', // includes all levels
            format: commonFormat
        })
    ]
});

export default logger;
