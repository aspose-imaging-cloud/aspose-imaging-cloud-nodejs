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
 * Specific folder API tests for Storage.
 */
class FolderApiTests extends StorageApiTester {
    public async createFolderTest() {
        const folder = `${this.TempFolder}/DummyFolder`;
        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage}))).exists) {
                await this.imagingApi.deleteFolder(new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            await this.imagingApi.createFolder(new imaging.CreateFolderRequest({ path: folder, storageName: this.TestStorage }));
            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeTruthy();
        } finally {
            if ((await this.imagingApi.objectExists(new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();
        }
    }

    public async copyFolderTest() {
        const folder = `${this.TempFolder}/Storage`;
        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            await this.imagingApi.copyFolder(
                new imaging.CopyFolderRequest({ srcPath: this.OriginalDataFolder, destPath: folder, 
                    srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeTruthy();
            const originalFiles = (await this.imagingApi.getFilesList(
                new imaging.GetFilesListRequest({ path: this.OriginalDataFolder, storageName: this.TestStorage }))).value;
            const copiedFiles = (await this.imagingApi.getFilesList(
                new imaging.GetFilesListRequest({ path: folder, storageName: this.TestStorage }))).value;
            expect(originalFiles.length).toBeGreaterThan(0);
            expect(copiedFiles.length).toBeGreaterThan(0);
            expect(originalFiles.length).toEqual(copiedFiles.length);
            const count = originalFiles.length;
            let x: number;
            for (x = 0; x < count; x++) {
                const curFile = originalFiles[x];
                expect(copiedFiles.find((f) => f.isFolder === curFile.isFolder && f.name === curFile.name && f.size === curFile.size)).not.toBeNull();
            }
        } finally {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();
        }
    }

    public async moveFolderTest() {
        const tmpFolder = `${this.TempFolder}/Temp`;
        const folder = `${this.TempFolder}/Storage`;
        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: tmpFolder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(new imaging.DeleteFolderRequest({ path: tmpFolder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: tmpFolder, storageName: this.TestStorage }))).exists).toBeFalsy();
            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            await this.imagingApi.copyFolder(
                new imaging.CopyFolderRequest({ srcPath: this.OriginalDataFolder, destPath: tmpFolder, 
                    srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: tmpFolder, storageName: this.TestStorage }))).exists).toBeTruthy();

            await this.imagingApi.moveFolder(
                new imaging.MoveFolderRequest({ srcPath: tmpFolder, destPath: folder, srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: tmpFolder, storageName: this.TestStorage }))).exists).toBeFalsy();
            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeTruthy();

            const originalFiles = (await this.imagingApi.getFilesList(
                new imaging.GetFilesListRequest({ path: this.OriginalDataFolder, storageName: this.TestStorage }))).value;
            const copiedFiles = (await this.imagingApi.getFilesList(
                new imaging.GetFilesListRequest({ path: folder, storageName: this.TestStorage }))).value;
            expect(originalFiles.length).toBeGreaterThan(0);
            expect(copiedFiles.length).toBeGreaterThan(0);
            expect(originalFiles.length).toBeGreaterThan(0);
            const count: number = originalFiles.length;
            let x: number;
            for (x = 0; x < count; x++) {
                const curFile = originalFiles[x];
                expect(copiedFiles.find((f) => f.isFolder === curFile.isFolder && f.name === curFile.name && f.size === curFile.size)).not.toBeNull();
            }
        } finally {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();
        }
    }

    public async filesListTest() {
        let files = (await this.imagingApi.getFilesList(new imaging.GetFilesListRequest({ path: this.OriginalDataFolder,
            storageName: this.TestStorage }))).value;
        expect(files.length).toEqual(3);
        const folder1 = files.find((f) => f.name === "Folder1");
        expect(folder1).toBeTruthy();
        expect(folder1.isFolder).toBeTruthy();
        expect(this.trim(folder1.path, "/").endsWith(folder1.name)).toBeTruthy();
        const folder2 = files.find((f) => f.name === "Folder2");
        expect(folder2).toBeTruthy();
        expect(folder2.isFolder).toBeTruthy();
        expect(this.trim(folder2.path, "/").endsWith(folder2.name)).toBeTruthy();
        const storageFile = files.find((f) => f.name === "Storage.txt");
        expect(storageFile).toBeTruthy();
        expect(storageFile.isFolder).toBeFalsy();
        expect(this.trim(storageFile.path, "/").endsWith(storageFile.name)).toBeTruthy();
        expect(storageFile.size).toEqual(this.trim(storageFile.path, "/").length);

        files = (await this.imagingApi.getFilesList(new imaging.GetFilesListRequest({ path: `${this.OriginalDataFolder}/${folder1.name}`,
            storageName: this.TestStorage }))).value;
        expect(files.length).toEqual(1);
        const folder1File = files.find((f) => f.name === "Folder1.txt");
        expect(folder1File).toBeTruthy();
        expect(folder1File.isFolder).toBeFalsy();
        expect(this.trim(folder1File.path, "/").endsWith(folder1File.name)).toBeTruthy();
        expect(folder1File.size).toEqual(this.trim(folder1File.path, "/").length);

        files = (await this.imagingApi.getFilesList(new imaging.GetFilesListRequest({ path: `${this.OriginalDataFolder}/${folder2.name}`,
            storageName: this.TestStorage }))).value;
        expect(files.length).toEqual(2);
        const folder2File = files.find((f) => f.name === "Folder2.txt");
        expect(folder2File).toBeTruthy();
        expect(folder2File.isFolder).toBeFalsy();
        expect(this.trim(folder2File.path, "/").endsWith(folder2File.name)).toBeTruthy();
        expect(folder2File.size).toEqual(this.trim(folder1File.path, "/").length);
        const folder3 = files.find((f) => f.name === "Folder3");
        expect(folder3).toBeTruthy();
        expect(folder3.isFolder).toBeTruthy();
        expect(this.trim(folder3.path, "/").endsWith(folder3.name)).toBeTruthy();

        files = (await this.imagingApi.getFilesList(new imaging.GetFilesListRequest({ path: `${this.OriginalDataFolder}/${folder2.name}/${folder3.name}`,
            storageName: this.TestStorage }))).value;
        expect(files.length).toEqual(1);
        const folder3File = files.find((f) => f.name === "Folder3.txt");
        expect(folder3File).toBeTruthy();
        expect(folder3File.isFolder).toBeFalsy();
        expect(this.trim(folder3File.path, "/").endsWith(folder3File.name)).toBeTruthy();
        expect(folder3File.size).toEqual(this.trim(folder3File.path, "/").length);
    }
}

const testClass: FolderApiTests = new FolderApiTests();

beforeEach(() => {
    jest.setTimeout(StorageApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

test(`createFolderTest`, async () => {
    await testClass.createFolderTest();
});

test(`copyFolderTest`, async () => {
    await testClass.copyFolderTest();
});

test(`moveFolderTest`, async () => {
    await testClass.moveFolderTest();
});

test(`filesListTest`, async () => {
    await testClass.filesListTest();
});
