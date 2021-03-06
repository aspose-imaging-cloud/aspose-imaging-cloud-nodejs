﻿/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018-2019 Aspose Pty Ltd. All rights reserved.
* </copyright>
* <summary>
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
* 
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.
* 
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*  SOFTWARE.
* </summary>
* --------------------------------------------------------------------------------------------------------------------
*/

import * as imaging from "../../../lib/api";
import { StorageApiTester } from "./storage-api-tester";

/**
 * Specific Storage API tests.
 */
class StorageApiTests extends StorageApiTester {
    
    public async getDiscUsageTest() {
        try {
            const discUsage = await this.imagingApi.getDiscUsage(new imaging.GetDiscUsageRequest({ storageName: this.TestStorage }));
            expect(discUsage.usedSize).toBeLessThan(discUsage.totalSize);
        } catch (e) {
            if (e instanceof imaging.ApiError) {
                expect(e.statusCode).toEqual(501);
            } else {
                throw e;
            }
        }
    }

    public async storageExistsTest() {
        const storageExists = await this.imagingApi.storageExists(new imaging.StorageExistsRequest({ storageName: this.TestStorage }));
        expect(storageExists.exists).toBeTruthy();
    }

    public async storageDoesNotExistTest() {
        const storageExists = await this.imagingApi.storageExists(new imaging.StorageExistsRequest({ storageName: "NotExistingStorage" }));
        expect(storageExists.exists).toBeFalsy();
    }
}

const testClass: StorageApiTests = new StorageApiTests();

beforeEach(() => {
    jest.setTimeout(StorageApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

test(`getDiscUsageTest`, async () => {
    // IMAGINGCLOUD-292
    // await testClass.getDiscUsageTest();
});

test(`storageExistsTest`, async () => {
    await testClass.storageExistsTest();
});

test(`storageDoesNotExistTest`, async () => {
    await testClass.storageDoesNotExistTest();
});
