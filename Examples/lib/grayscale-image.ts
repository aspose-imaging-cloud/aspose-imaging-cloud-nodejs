/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018-2020 Aspose Pty Ltd. All rights reserved.
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

import {CreateGrayscaledImageRequest, GrayscaleImageRequest, ImagingApi,} from "@asposecloud/aspose-imaging-cloud";
import {ImagingBase} from "./imaging-base";
import * as fs from "fs";
import * as path from "path";

/**
 * Grayscale image example.
 */
export class GrayscaleImage extends ImagingBase {

    /**
     * The name of the example image file.
     */
    protected _SampleImageFileName: string = "GrayscaleSampleImage.bmp";

    public constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Grayscale image example:");
    }

    /**
     * Grayscales the image from cloud storage.
     * @constructor
     */
    public async GrayscaleImageFromStorage() {
        console.log(`Grayscales the image from cloud storage`);

        await this.UploadSampleImageToCloud();

        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new GrayscaleImageRequest({
            name: this.SampleImageFileName,
            folder,
            storage,
        });

        console.log(`Call GrayscaleImage`);

        try {
            const updatedImage = await this.ImagingApi.grayscaleImage(request);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false, ".bmp");
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Grayscale an existing image, and upload updated image to Cloud Storage.
     * @constructor
     */
    public async GrayscaleImageAndUploadToStorage() {
        console.log("Grayscales the image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new GrayscaleImageRequest({
            name: this.SampleImageFileName,
            folder,
            storage,
        });

        console.log(`Call GrayscaleImage`);

        try {
            const updatedImage = await this.ImagingApi.grayscaleImage(request);
            await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Grayscale an image. Image data is passed in a request stream.
     * @constructor
     */
    public async CreateGrayscaledImageFromRequestBody() {
        console.log("Grayscales the image from request body");

        const outPath = undefined; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const request = new CreateGrayscaledImageRequest({
            imageData: inputStream,
            outPath,
            storage,
        });

        console.log(`Call CreateGrayscaledImage`);

        const updatedImage = await this.ImagingApi.createGrayscaledImage(request);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, true, ".bmp");

        console.log();
    }
}
