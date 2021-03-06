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

import * as fs from "fs";
import * as path from "path";
import {ImagingBase} from "./imaging-base";
import {
    ConvertImageRequest, CreateConvertedImageRequest,
    ImagingApi,
} from "@asposecloud/aspose-imaging-cloud";

/**
 * Export image example.
 */
export class ExportImage extends ImagingBase {
    protected _SampleImageFileName: string = "ExportSampleImage.bmp";

    /**
     * Creates a new instance of the ExportImage class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Export image example");
    }

    /**
     * Export an image to another format.
     */
    public async SaveImageAsFromStorage() {
        console.log("Export an image to another format");

        await this.UploadSampleImageToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Export(SaveAs)
        // for possible output formats
        const format = "pdf";
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // Cloud Storage name

        const request = new ConvertImageRequest({name: this.SampleImageFileName, format, folder, storage});

        console.log(`Call SaveImageAs with params: format: ${format}`);

        const updatedImage = await this.ImagingApi.convertImage(request);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, false, format);

        console.log();
    }

    /**
     * Export an image to another format.
     */
    public async SaveImageAsAndUploadToStorage() {
        console.log("Export an image to another format and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Export(SaveAs)
        // for possible output formats
        const format = "pdf";
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // Cloud Storage name

        const request = new ConvertImageRequest({name: this.SampleImageFileName, format, folder, storage});

        console.log(`Call SaveImageAs with params: format: ${format}`);

        const updatedImage = await this.ImagingApi.convertImage(request);
        await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false, format), updatedImage);

        console.log();
    }

    /**
     * Export an image to another format. Image data is passed in a request stream.
     */
    public async CreateSavedImageAsFromRequestBody() {
        console.log("Export an image to another format. Image data is passed in a request body");

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Export(SaveAs)
        // for possible output formats
        const format = "pdf";
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image)
        const storage = undefined; // Cloud Storage name

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const request = new CreateConvertedImageRequest({imageData: inputStream, format, outPath, storage});

        console.log(`Call CreateSavedImageAs with params: format: ${format}`);

        const updatedImage = await this.ImagingApi.createConvertedImage(request);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, true, format);

        console.log();
    }

}

