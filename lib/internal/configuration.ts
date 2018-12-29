/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd. All rights reserved.

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { IAuthentication, OAuth  } from "../internal/auth";
const defaultBasePath = "https://api.aspose.cloud/";

/**
 * Words API configuration
 */
export class Configuration {
    /**
     * Authentication.
     */
    public authentication: IAuthentication;

    /**
     * App SID.
     */
    public appSID: string;

    /**
     * App key.
     */
    public appKey: string;

    /**
     * Base Url.
     */
    public baseUrl: string = defaultBasePath;

    /**
     *  Gets or sets a value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    public debugMode: boolean;

    /**
     * Gets or sets the API version.
     */
    public version: string = "v2.0";

    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean, version?: string) {
        if (baseUrl) {
            this.baseUrl = baseUrl;
        }

        this.appSID = appSID;
        this.appKey = appKey;
        this.debugMode = debugMode;

        if (version) {
            this.version = version;
        }

        this.authentication = new OAuth() as IAuthentication;
    }

    /**
     * Returns api base url
     */
    public getApiBaseUrl(): string {
        if (this.baseUrl.endsWith("/")) {
            return this.baseUrl + this.version;
        } else {
            return this.baseUrl + "/" + this.version;
        }
    }
}