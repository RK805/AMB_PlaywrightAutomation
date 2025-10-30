import { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import logger from '../utils/logger';

class CustomLoggerReporter implements Reporter {

    onBegin(config: FullConfig, suite: Suite) {
        logger.info(`🚀 Starting test run with ${suite.allTests().length} tests...`);
    }

    onTestBegin(test: TestCase) {
        logger.info(`🧩 Test Started: ${test.titlePath().join(' › ')}`);
    }

    onTestEnd(test: TestCase, result: TestResult) {
        const testName = test.titlePath().join(' › ');

        if (result.status === 'passed') {
            logger.info(`✅ PASSED: ${testName}`);
        } else if (result.status === 'failed') {
            logger.error(`❌ FAILED: ${testName}`);
            if (result.error) logger.error(`   ↳ Error: ${result.error.message}`);
        } else if (result.status === 'skipped') {
            logger.warn(`⏭️ SKIPPED: ${testName}`);
        } else if (result.status === 'timedOut') {
            logger.error(`⏰ TIMED OUT: ${testName}`);
        }
    }

    onEnd(result: FullResult) {
        const summary = `🏁 Test run finished — ${result.status.toUpperCase()}`;
        if (result.status === 'passed') logger.info(summary);
        else logger.error(summary);
    }
}

export default CustomLoggerReporter;
