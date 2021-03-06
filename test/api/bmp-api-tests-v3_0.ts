/*
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

import * as imaging from "../../lib/api";
import { ApiTester } from "../base/api-tester";

/**
 * Class for testing BMP-related API calls
 */
class BmpApiTests extends ApiTester {

    public async modifyBmpTest() {

        const name: string = "test.bmp";
        const bitsPerPixel: number = 32;
        const horizontalResolution: number = 300;
        const verticalResolution: number  = 300;
        const fromScratch: boolean = false;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "modifyBmpTest", 
                `Input image: ${name}; Bits per pixel: ${bitsPerPixel}; Horizontal resolution: ${horizontalResolution}; Vertical resolution: ${verticalResolution}`,
                name,
                async () => {
                    const request = new imaging.ModifyBmpRequest({ name, bitsPerPixel, horizontalResolution, verticalResolution, fromScratch, folder, storage });
                    const response = await this.imagingApi.modifyBmp(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.bmpProperties).toBeTruthy();
                    expect(bitsPerPixel).toEqual(resultProperties.bitsPerPixel);
                    expect(verticalResolution).toEqual(Math.ceil(resultProperties.verticalResolution));
                    expect(horizontalResolution).toEqual(Math.ceil(resultProperties.horizontalResolution));

                    expect(originalProperties.bmpProperties).toBeTruthy();
                    expect(originalProperties.bmpProperties.compression).toEqual(resultProperties.bmpProperties.compression);
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async createModifiedBmpTest(saveResultToStorage: boolean) {
        const name: string = "test.bmp";
        const bitsPerPixel: number = 32;
        const horizontalResolution: number = 300;
        const verticalResolution: number  = 300;
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.bmp`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "createModifiedBmpTest", 
                saveResultToStorage,
                `Input image: ${name}; Bits per pixel: ${bitsPerPixel}; Horizontal resolution: ${horizontalResolution}; Vertical resolution: ${verticalResolution}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.CreateModifiedBmpRequest({ imageData: inputStream, bitsPerPixel, horizontalResolution, verticalResolution, fromScratch, outPath, storage });
                    const response = await this.imagingApi.createModifiedBmp(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.bmpProperties).toBeTruthy();
                    expect(bitsPerPixel).toEqual(resultProperties.bitsPerPixel);
                    expect(verticalResolution).toEqual(Math.ceil(resultProperties.verticalResolution));
                    expect(horizontalResolution).toEqual(Math.ceil(resultProperties.horizontalResolution));

                    expect(originalProperties.bmpProperties).toBeTruthy();
                    expect(originalProperties.bmpProperties.compression).toEqual(resultProperties.bmpProperties.compression);
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: BmpApiTests = new BmpApiTests();

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

describe.each([[true], [false]])(
    "BmpTestSuite_V3",
    (saveResultToStorage) => {

        if (!saveResultToStorage) {
            test(`modifyBmpTest`, async () => {
                await testClass.modifyBmpTest();
            });
        }
        
        test(`createModifiedBmpTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createModifiedBmpTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
