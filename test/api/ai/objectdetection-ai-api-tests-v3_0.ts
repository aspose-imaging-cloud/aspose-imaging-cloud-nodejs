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

import * as imaging from "../../../lib/api";
import {ApiTester} from "../../base/api-tester";

/**
 * Class for testing object detection API calls
 */
class ObjectDetectionApiTests extends ApiTester {

    public async objectDetectionImageTest() {
        const name: string = "test.bmp";
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name !== name) {
                continue;
            }
            const threshold = 20;
            const includeClass = true;
            const includeScore = true;

            await this.testObjectDetectionGetRequest(
                "objectDetection_objectbounds_test",
                `Input image: ${name}; Method: ssd; threshold: ${threshold}; includeClass: ${includeClass}; includeScore: ${includeScore}`,
                name,
                async () => {
                    const request: imaging.ObjectBoundsRequest = new imaging.ObjectBoundsRequest({
                        name,
                        folder, storage, threshold, includeClass, includeScore,
                    });
                    return await this.imagingApi.objectBounds(request);
                },
                (detectedObjectsList) => {
                    expect(detectedObjectsList).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects.length).toBeGreaterThan(0);
                    expect(detectedObjectsList.detectedObjects[0].label).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects[0].score).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects[0].bounds).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects[0].bounds.height).toBeGreaterThan(0);
                    expect(detectedObjectsList.detectedObjects[0].bounds.width).toBeGreaterThan(0);
                    return Promise.resolve();
                },
                folder,
                storage);

            await this.testGetRequest(
                "objectDetection_visualobjectbounds_test",
                `Input image: ${name}; Method: ssd; threshold: ${threshold}; includeClass: ${includeClass}; includeScore: ${includeScore}`,
                name,
                async () => {
                    const request: imaging.VisualObjectBoundsRequest = new imaging.VisualObjectBoundsRequest({
                        name,
                        folder, storage, threshold, includeClass, includeScore
                    });
                    return await this.imagingApi.visualObjectBounds(request);
                },
                (imagingResponse) => {
                    expect(imagingResponse).toBeTruthy();
                    return Promise.resolve();
                },
                folder,
                storage);

        }
    }

    public async createObjectDetectionTest(
        saveResultToStorage: boolean,
    ) {
        const name: string = "test.bmp";
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name !== name) {
                continue;
            }

            const threshold = 20;
            const includeClass = true;
            const includeScore = true;

            await this.testObjectDetectionPostRequest(
                "objectDetection_createobjectbounds_test",
                saveResultToStorage,
                `Input image: ${name}; Method: ssd; threshold: ${threshold}; includeClass: ${includeClass}; includeScore: ${includeScore}; saveResultToStorage: ${saveResultToStorage}`,
                name,
                "result_" + name,
                async (inputStream, outPath) => {
                    const request: imaging.CreateObjectBoundsRequest
                        = new imaging.CreateObjectBoundsRequest(
                        {imageData: inputStream, threshold, includeClass, includeScore, outPath, storage});
                    return await this.imagingApi.createObjectBounds(request);
                },
                (detectedObjectsList) => {
                    expect(detectedObjectsList).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects.length).toBeGreaterThan(0);
                    expect(detectedObjectsList.detectedObjects[0].label).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects[0].score).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects[0].bounds).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects[0].bounds.height).toBeGreaterThan(0);
                    expect(detectedObjectsList.detectedObjects[0].bounds.width).toBeGreaterThan(0);
                    return Promise.resolve();
                },
                folder,
                storage);

            await this.testObjectDetectionPostRequest(
                "objectDetection_createvisualobjectbounds_test",
                saveResultToStorage,
                `Input image: ${name}; Method: ssd; threshold: ${threshold}; includeClass: ${includeClass}; includeScore: ${includeScore}; saveResultToStorage: ${saveResultToStorage}`,
                name,
                "result_" + name,
                async (inputStream, outPath) => {
                    const request: imaging.CreateVisualObjectBoundsRequest
                        = new imaging.CreateVisualObjectBoundsRequest(
                        {imageData: inputStream, includeClass, includeScore, threshold, outPath, storage});
                    return await this.imagingApi.createVisualObjectBounds(request);
                },
                (imagingResponse) => {
                    expect(imagingResponse).toBeTruthy();
                    expect(imagingResponse.length).toBeGreaterThan(0)
                    return Promise.resolve();
                },
                folder,
                storage);
        }
    }
}

const testClass: ObjectDetectionApiTests = new ObjectDetectionApiTests();

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () => {
    await testClass.beforeAll();
});

afterAll(async () => {
    await testClass.afterAll();
});

describe.each([true, false])(
    "ObjectDetectionTestSuite_V3",
    (saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`objectDetectionTest`, async () => {
                await testClass.objectDetectionImageTest();
            });
        }

        test(`createObjectDetectionTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createObjectDetectionTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
