import { Suite } from 'benchmark';
import beautifyBenchmark from 'beautify-benchmark';

import { toKebabCase, pad, indent } from './utilities';

export const runTest = (testName, cases) => (
    new Promise((resolve) => {
        const testCases = {};

        Object.keys(cases).forEach((k) => {
            testCases[toKebabCase(k)] = { testCase: cases[k], result: null };
        });

        console.log(`Running: ${testName}.\n`);

        const testSuite = new Suite();

        Object.keys(testCases).forEach((caseName) => {
            testSuite.add(
                caseName,
                () => { testCases[caseName].result = testCases[caseName].testCase(pad(caseName)); },
            );
        });

        testSuite.on('cycle', (e) => {
            beautifyBenchmark.add(e.target);
        });

        testSuite.on('complete', function onComplete() {
            const fastest = this.filter('fastest').map('name');
            beautifyBenchmark.log();
            console.log(indent(`Fastest ${fastest.length < 2 ? 'is' : 'are'}: ${fastest.join(', ')}\n`));

            resolve();
        });

        testSuite.run({ async: true });
    })
);
