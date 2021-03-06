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

import * as fs from "fs";
import * as path from "path";
import * as imaging from "../../lib/api";
import { ApiTester } from "../base/api-tester";

/**
 * Tests that correspond with examples code.
 */
class ExamplesApiTests extends ApiTester {

    /**
     * Convert from storage example.
     */
    public async convertFromStorageExampleTest() {
        const config = this.imagingApi.configuration;
        const imagingApi = new imaging.ImagingApi(config.clientId, config.clientSecret, config.baseUrl,
            config.debugMode, config.apiVersion);

        try {
            // get local image
            const testFilePath: string = path.join(this.LocalTestFolder, "test.png");
            const localInputImage = fs.readFileSync(testFilePath);

            // upload local image to storage
            let uploadFileRequest =
                new imaging.UploadFileRequest({ path: "ExampleFolderNet/inputImage.png", file: localInputImage, 
                storageName: (config.onPremise ? this.TestStorage : undefined) });
            let result: imaging.FilesUploadResult = await imagingApi.uploadFile(uploadFileRequest);
            // inspect result.errors list if there were any
            // inspect result.uploaded list for uploaded file names
            console.log(result);

            // convert image from storage to JPEG
            const getConvertRequest =
                new imaging.ConvertImageRequest({
                    name: "inputImage.png", format: "jpg", folder: "ExampleFolderNet", 
                    storage: (config.onPremise ? this.TestStorage : undefined) });

            const convertedFile =
                await imagingApi.convertImage(getConvertRequest);

            // process resulting image
            // for example, save it to storage
            uploadFileRequest =
                new imaging.UploadFileRequest({ path: "ExampleFolderNet/resultImage.jpg", file: convertedFile, 
                storageName: (config.onPremise ? this.TestStorage : undefined) });
            result = await imagingApi.uploadFile(uploadFileRequest);
            // inspect result.errors list if there were any
            // inspect result.uploaded list for uploaded file names
            console.log(result);
        } finally {
            // remove files from storage
            await imagingApi.deleteFile(new imaging.DeleteFileRequest({ path: "ExampleFolderNet/inputImage.png", 
                storageName: (config.onPremise ? this.TestStorage : undefined) }));
            await imagingApi.deleteFile(new imaging.DeleteFileRequest({ path: "ExampleFolderNet/resultImage.jpg",
                storageName: (config.onPremise ? this.TestStorage : undefined) }));
        }
    }

    /**
     * Convert from stream example.
     */
    public async convertFromStreamExampleTest() {
        const config = this.imagingApi.configuration;
        const imagingApi = new imaging.ImagingApi(config.clientId, config.clientSecret, config.baseUrl,
            config.debugMode, config.apiVersion);

        try {
            // get local image
            const testFilePath: string = path.join(this.LocalTestFolder, "test.png");
            const localInputImage = fs.readFileSync(testFilePath);

            // convert image from request stream to JPEG and save it to storage
            // please, use outPath parameter for saving the result to storage
            const postSaveToStorageRequest =
                new imaging.CreateConvertedImageRequest({
                    imageData: localInputImage, format: "jpg", outPath: "ExampleFolderNet/resultImage.jpg", 
                    storage: (config.onPremise ? this.TestStorage : undefined) });

            await imagingApi.createConvertedImage(postSaveToStorageRequest);

            // download saved image from storage and process it
            const savedFile =
                await imagingApi.downloadFile(new imaging.DownloadFileRequest({ path: "ExampleFolderNet/resultImage.jpg",
                    storageName: (config.onPremise ? this.TestStorage : undefined) }));
            console.log(savedFile);
                    
            // convert image from request stream to JPEG and read it from resulting stream
            // please, set outPath parameter as null to return result in request stream instead of saving to storage
            const postSaveToStreamRequest =
                new imaging.CreateConvertedImageRequest({ imageData: localInputImage, format: "jpg", outPath: null, 
                    storage: (config.onPremise ? this.TestStorage : undefined) });

            // process resulting image from response stream
            const resultPostImageStream = await imagingApi.createConvertedImage(postSaveToStreamRequest);
            console.log(resultPostImageStream);
        } finally {
            // remove files from storage
            await imagingApi.deleteFile(new imaging.DeleteFileRequest({ path: "ExampleFolderNet/resultImage.jpg", 
                storageName: (config.onPremise ? this.TestStorage : undefined) }));
        }
    }
}

const testClass: ExamplesApiTests = new ExamplesApiTests();

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () => {
    await testClass.beforeAll();
});

afterAll(async () => {
    await testClass.afterAll();
});

test(`convertFromStorageExampleTest`, async () => {
    await testClass.convertFromStorageExampleTest();
});

test(`convertFromStreamExampleTest`, async () => {
    await testClass.convertFromStreamExampleTest();
});
