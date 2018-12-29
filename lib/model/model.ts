/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018 Aspose Pty Ltd. All rights reserved.
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
import { SaaSposeResponse } from "./stable-model";

export * from "./stable-model";

/**
 * Represents information about image in bmp format.
 */
export class BmpProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "compression",
            baseName: "Compression",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return BmpProperties.attributeTypeMap;
    }

    /**
     * Gets or sets compression of bitmap.
     */
    public compression: string;
    
    public constructor(init?: Partial<BmpProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about image in dicom format.
 */
export class DicomProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "planarConfiguration",
            baseName: "PlanarConfiguration",
            type: "number",
        },        
        {
            name: "reds",
            baseName: "Reds",
            type: "string",
        },        
        {
            name: "greens",
            baseName: "Greens",
            type: "string",
        },        
        {
            name: "blues",
            baseName: "Blues",
            type: "string",
        },        
        {
            name: "dicomHeaderInfoByBytes",
            baseName: "DicomHeaderInfoByBytes",
            type: "string",
        },        
        {
            name: "signedImage",
            baseName: "SignedImage",
            type: "boolean",
        },        
        {
            name: "dicomInfo",
            baseName: "DicomInfo",
            type: "Array<string>",
        },        
        {
            name: "samplesPerPixel",
            baseName: "SamplesPerPixel",
            type: "number",
        },        
        {
            name: "bitsAllocated",
            baseName: "BitsAllocated",
            type: "number",
        },        
        {
            name: "photoInterpretation",
            baseName: "PhotoInterpretation",
            type: "string",
        },        
        {
            name: "widthTagFound",
            baseName: "WidthTagFound",
            type: "boolean",
        },        
        {
            name: "heightTagFound",
            baseName: "HeightTagFound",
            type: "boolean",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "windowCentre",
            baseName: "WindowCentre",
            type: "number",
        },        
        {
            name: "windowWidth",
            baseName: "WindowWidth",
            type: "number",
        },        
        {
            name: "pixelRepresentation",
            baseName: "PixelRepresentation",
            type: "number",
        },        
        {
            name: "rescaleIntercept",
            baseName: "RescaleIntercept",
            type: "number",
        },        
        {
            name: "rescaleSlope",
            baseName: "RescaleSlope",
            type: "number",
        },        
        {
            name: "numberOfFrames",
            baseName: "NumberOfFrames",
            type: "number",
        },        
        {
            name: "lengthValue",
            baseName: "LengthValue",
            type: "number",
        },        
        {
            name: "isLittleEndian",
            baseName: "IsLittleEndian",
            type: "boolean",
        },        
        {
            name: "offset",
            baseName: "Offset",
            type: "number",
        },        
        {
            name: "dicomFound",
            baseName: "DicomFound",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DicomProperties.attributeTypeMap;
    }

    /**
     * Gets or sets the planar configuration.
     */
    public planarConfiguration: number;
    
    /**
     * Gets or sets the array of red colors.
     */
    public reds: string;
    
    /**
     * Gets or sets the array of green colors.
     */
    public greens: string;
    
    /**
     * Gets or sets the array of blue colors.
     */
    public blues: string;
    
    /**
     * Gets or sets the header information by bytes.
     */
    public dicomHeaderInfoByBytes: string;
    
    /**
     * Gets or sets a value indicating whether it's a signed image.
     */
    public signedImage: boolean;
    
    /**
     * Gets or sets the header information of the DICOM file.
     */
    public dicomInfo: Array<string>;
    
    /**
     * Gets or sets samples per pixel count.
     */
    public samplesPerPixel: number;
    
    /**
     * Gets or sets allocated bits count.
     */
    public bitsAllocated: number;
    
    /**
     * Gets or sets the photo interpretation.
     */
    public photoInterpretation: string;
    
    /**
     * Gets or sets a value indicating whether width tag found.
     */
    public widthTagFound: boolean;
    
    /**
     * Gets or sets a value indicating whether height tag found.
     */
    public heightTagFound: boolean;
    
    /**
     * Gets or sets the width.
     */
    public width: number;
    
    /**
     * Gets or sets the height.
     */
    public height: number;
    
    /**
     * Gets or sets the window centre.
     */
    public windowCentre: number;
    
    /**
     * Gets or sets the width of the window.
     */
    public windowWidth: number;
    
    /**
     * Gets or sets data representation of the pixel samples.
     */
    public pixelRepresentation: number;
    
    /**
     * Gets or sets a value of the rescale intercept.
     */
    public rescaleIntercept: number;
    
    /**
     * Gets or sets a value of the rescale slope.
     */
    public rescaleSlope: number;
    
    /**
     * Gets or sets the number of frames.
     */
    public numberOfFrames: number;
    
    /**
     * Gets or sets the length of element.
     */
    public lengthValue: number;
    
    /**
     * Indicates if DICOM image has little endian byte order.
     */
    public isLittleEndian: boolean;
    
    /**
     * Gets or sets the offset.
     */
    public offset: number;
    
    /**
     * Gets or sets a value indicating whether \"DICOM\" data is found.
     */
    public dicomFound: boolean;
    
    public constructor(init?: Partial<DicomProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents properties of djvu file.
 */
export class DjvuProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "backgroundColor",
            baseName: "BackgroundColor",
            type: "string",
        },        
        {
            name: "hasBackgroundColor",
            baseName: "HasBackgroundColor",
            type: "boolean",
        },        
        {
            name: "pagesCount",
            baseName: "PagesCount",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DjvuProperties.attributeTypeMap;
    }

    /**
     * Gets or sets background color.
     */
    public backgroundColor: string;
    
    /**
     * Gets or sets a value indicating whether background color is used.
     */
    public hasBackgroundColor: boolean;
    
    /**
     * Gets or sets pages count.
     */
    public pagesCount: number;
    
    public constructor(init?: Partial<DjvuProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about image in DNG format.
 */
export class DngProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "dngVersion",
            baseName: "DngVersion",
            type: "number",
        },        
        {
            name: "description",
            baseName: "Description",
            type: "string",
        },        
        {
            name: "model",
            baseName: "Model",
            type: "string",
        },        
        {
            name: "cameraManufacturer",
            baseName: "CameraManufacturer",
            type: "string",
        },        
        {
            name: "isFoveon",
            baseName: "IsFoveon",
            type: "number",
        },        
        {
            name: "software",
            baseName: "Software",
            type: "string",
        },        
        {
            name: "rawCount",
            baseName: "RawCount",
            type: "number",
        },        
        {
            name: "filters",
            baseName: "Filters",
            type: "number",
        },        
        {
            name: "colorsCount",
            baseName: "ColorsCount",
            type: "number",
        },        
        {
            name: "xmpData",
            baseName: "XmpData",
            type: "string",
        },        
        {
            name: "translationCfaDng",
            baseName: "TranslationCfaDng",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DngProperties.attributeTypeMap;
    }

    /**
     * Gets or sets the DNG version.
     */
    public dngVersion: number;
    
    /**
     * Gets or sets the description of colors (RGBG, RGBE, GMCY or GBTG).
     */
    public description: string;
    
    /**
     * Gets or sets the camera model.
     */
    public model: string;
    
    /**
     * Gets or sets the camera manufacturer.
     */
    public cameraManufacturer: string;
    
    /**
     * Gets or sets the value indicating whether it's a Foveon matrix.
     */
    public isFoveon: number;
    
    /**
     * Gets or sets the software.
     */
    public software: string;
    
    /**
     * Gets or sets the number of RAW images in file (0 means that the file has not been recognized).
     */
    public rawCount: number;
    
    /**
     * Gets or sets the bit mask describing the order of color pixels in the matrix.
     */
    public filters: number;
    
    /**
     * Gets or sets the colors count.
     */
    public colorsCount: number;
    
    /**
     * Gets or sets the XMP data.
     */
    public xmpData: string;
    
    /**
     * Gets or sets the translation array for CFA mosaic of DNG format.
     */
    public translationCfaDng: Array<string>;
    
    public constructor(init?: Partial<DngProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents common EXIF data section.
 */
export class ExifData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "apertureValue",
            baseName: "ApertureValue",
            type: "number",
        },        
        {
            name: "bodySerialNumber",
            baseName: "BodySerialNumber",
            type: "string",
        },        
        {
            name: "brightnessValue",
            baseName: "BrightnessValue",
            type: "number",
        },        
        {
            name: "cFAPattern",
            baseName: "CFAPattern",
            type: "string",
        },        
        {
            name: "cameraOwnerName",
            baseName: "CameraOwnerName",
            type: "string",
        },        
        {
            name: "colorSpace",
            baseName: "ColorSpace",
            type: "string",
        },        
        {
            name: "componentsConfiguration",
            baseName: "ComponentsConfiguration",
            type: "string",
        },        
        {
            name: "compressedBitsPerPixel",
            baseName: "CompressedBitsPerPixel",
            type: "number",
        },        
        {
            name: "contrast",
            baseName: "Contrast",
            type: "string",
        },        
        {
            name: "customRendered",
            baseName: "CustomRendered",
            type: "string",
        },        
        {
            name: "dateTimeDigitized",
            baseName: "DateTimeDigitized",
            type: "string",
        },        
        {
            name: "dateTimeOriginal",
            baseName: "DateTimeOriginal",
            type: "string",
        },        
        {
            name: "deviceSettingDescription",
            baseName: "DeviceSettingDescription",
            type: "string",
        },        
        {
            name: "digitalZoomRatio",
            baseName: "DigitalZoomRatio",
            type: "number",
        },        
        {
            name: "exifVersion",
            baseName: "ExifVersion",
            type: "string",
        },        
        {
            name: "exposureBiasValue",
            baseName: "ExposureBiasValue",
            type: "number",
        },        
        {
            name: "exposureIndex",
            baseName: "ExposureIndex",
            type: "number",
        },        
        {
            name: "exposureMode",
            baseName: "ExposureMode",
            type: "string",
        },        
        {
            name: "exposureProgram",
            baseName: "ExposureProgram",
            type: "string",
        },        
        {
            name: "exposureTime",
            baseName: "ExposureTime",
            type: "number",
        },        
        {
            name: "fNumber",
            baseName: "FNumber",
            type: "number",
        },        
        {
            name: "fileSource",
            baseName: "FileSource",
            type: "string",
        },        
        {
            name: "flash",
            baseName: "Flash",
            type: "string",
        },        
        {
            name: "flashEnergy",
            baseName: "FlashEnergy",
            type: "number",
        },        
        {
            name: "flashpixVersion",
            baseName: "FlashpixVersion",
            type: "string",
        },        
        {
            name: "focalLength",
            baseName: "FocalLength",
            type: "number",
        },        
        {
            name: "focalLengthIn35MmFilm",
            baseName: "FocalLengthIn35MmFilm",
            type: "number",
        },        
        {
            name: "focalPlaneResolutionUnit",
            baseName: "FocalPlaneResolutionUnit",
            type: "string",
        },        
        {
            name: "focalPlaneXResolution",
            baseName: "FocalPlaneXResolution",
            type: "number",
        },        
        {
            name: "focalPlaneYResolution",
            baseName: "FocalPlaneYResolution",
            type: "number",
        },        
        {
            name: "gPSAltitude",
            baseName: "GPSAltitude",
            type: "number",
        },        
        {
            name: "gPSAltitudeRef",
            baseName: "GPSAltitudeRef",
            type: "string",
        },        
        {
            name: "gPSAreaInformation",
            baseName: "GPSAreaInformation",
            type: "string",
        },        
        {
            name: "GPSDOP",
            baseName: "GPSDOP",
            type: "number",
        },        
        {
            name: "gPSDestBearing",
            baseName: "GPSDestBearing",
            type: "number",
        },        
        {
            name: "gPSDestBearingRef",
            baseName: "GPSDestBearingRef",
            type: "string",
        },        
        {
            name: "gPSDestDistance",
            baseName: "GPSDestDistance",
            type: "number",
        },        
        {
            name: "gPSDestDistanceRef",
            baseName: "GPSDestDistanceRef",
            type: "string",
        },        
        {
            name: "gPSDestLatitude",
            baseName: "GPSDestLatitude",
            type: "Array<number>",
        },        
        {
            name: "gPSDestLatitudeRef",
            baseName: "GPSDestLatitudeRef",
            type: "string",
        },        
        {
            name: "gPSDestLongitude",
            baseName: "GPSDestLongitude",
            type: "Array<number>",
        },        
        {
            name: "gPSDestLongitudeRef",
            baseName: "GPSDestLongitudeRef",
            type: "string",
        },        
        {
            name: "gPSDifferential",
            baseName: "GPSDifferential",
            type: "number",
        },        
        {
            name: "gPSImgDirection",
            baseName: "GPSImgDirection",
            type: "number",
        },        
        {
            name: "gPSImgDirectionRef",
            baseName: "GPSImgDirectionRef",
            type: "string",
        },        
        {
            name: "gPSDateStamp",
            baseName: "GPSDateStamp",
            type: "string",
        },        
        {
            name: "gPSLatitude",
            baseName: "GPSLatitude",
            type: "Array<number>",
        },        
        {
            name: "gPSLatitudeRef",
            baseName: "GPSLatitudeRef",
            type: "string",
        },        
        {
            name: "gPSLongitude",
            baseName: "GPSLongitude",
            type: "Array<number>",
        },        
        {
            name: "gPSLongitudeRef",
            baseName: "GPSLongitudeRef",
            type: "string",
        },        
        {
            name: "gPSMapDatum",
            baseName: "GPSMapDatum",
            type: "string",
        },        
        {
            name: "gPSMeasureMode",
            baseName: "GPSMeasureMode",
            type: "string",
        },        
        {
            name: "gPSProcessingMethod",
            baseName: "GPSProcessingMethod",
            type: "string",
        },        
        {
            name: "gPSSatellites",
            baseName: "GPSSatellites",
            type: "string",
        },        
        {
            name: "gPSSpeed",
            baseName: "GPSSpeed",
            type: "number",
        },        
        {
            name: "gPSSpeedRef",
            baseName: "GPSSpeedRef",
            type: "string",
        },        
        {
            name: "gPSStatus",
            baseName: "GPSStatus",
            type: "string",
        },        
        {
            name: "gPSTimestamp",
            baseName: "GPSTimestamp",
            type: "Array<number>",
        },        
        {
            name: "gPSTrack",
            baseName: "GPSTrack",
            type: "string",
        },        
        {
            name: "gPSTrackRef",
            baseName: "GPSTrackRef",
            type: "string",
        },        
        {
            name: "gPSVersionID",
            baseName: "GPSVersionID",
            type: "string",
        },        
        {
            name: "gainControl",
            baseName: "GainControl",
            type: "string",
        },        
        {
            name: "gamma",
            baseName: "Gamma",
            type: "number",
        },        
        {
            name: "iSOSpeed",
            baseName: "ISOSpeed",
            type: "number",
        },        
        {
            name: "iSOSpeedLatitudeYYY",
            baseName: "ISOSpeedLatitudeYYY",
            type: "number",
        },        
        {
            name: "iSOSpeedLatitudeZZZ",
            baseName: "ISOSpeedLatitudeZZZ",
            type: "number",
        },        
        {
            name: "photographicSensitivity",
            baseName: "PhotographicSensitivity",
            type: "number",
        },        
        {
            name: "imageUniqueID",
            baseName: "ImageUniqueID",
            type: "string",
        },        
        {
            name: "lensMake",
            baseName: "LensMake",
            type: "string",
        },        
        {
            name: "lensModel",
            baseName: "LensModel",
            type: "string",
        },        
        {
            name: "lensSerialNumber",
            baseName: "LensSerialNumber",
            type: "string",
        },        
        {
            name: "lensSpecification",
            baseName: "LensSpecification",
            type: "Array<number>",
        },        
        {
            name: "lightSource",
            baseName: "LightSource",
            type: "string",
        },        
        {
            name: "makerNoteRawData",
            baseName: "MakerNoteRawData",
            type: "string",
        },        
        {
            name: "maxApertureValue",
            baseName: "MaxApertureValue",
            type: "number",
        },        
        {
            name: "meteringMode",
            baseName: "MeteringMode",
            type: "string",
        },        
        {
            name: "OECF",
            baseName: "OECF",
            type: "string",
        },        
        {
            name: "pixelXDimension",
            baseName: "PixelXDimension",
            type: "number",
        },        
        {
            name: "pixelYDimension",
            baseName: "PixelYDimension",
            type: "number",
        },        
        {
            name: "recommendedExposureIndex",
            baseName: "RecommendedExposureIndex",
            type: "number",
        },        
        {
            name: "relatedSoundFile",
            baseName: "RelatedSoundFile",
            type: "string",
        },        
        {
            name: "saturation",
            baseName: "Saturation",
            type: "string",
        },        
        {
            name: "sceneCaptureType",
            baseName: "SceneCaptureType",
            type: "string",
        },        
        {
            name: "sceneType",
            baseName: "SceneType",
            type: "number",
        },        
        {
            name: "sensingMethod",
            baseName: "SensingMethod",
            type: "string",
        },        
        {
            name: "sensitivityType",
            baseName: "SensitivityType",
            type: "number",
        },        
        {
            name: "sharpness",
            baseName: "Sharpness",
            type: "number",
        },        
        {
            name: "shutterSpeedValue",
            baseName: "ShutterSpeedValue",
            type: "number",
        },        
        {
            name: "spatialFrequencyResponse",
            baseName: "SpatialFrequencyResponse",
            type: "string",
        },        
        {
            name: "spectralSensitivity",
            baseName: "SpectralSensitivity",
            type: "string",
        },        
        {
            name: "standardOutputSensitivity",
            baseName: "StandardOutputSensitivity",
            type: "number",
        },        
        {
            name: "subjectArea",
            baseName: "SubjectArea",
            type: "Array<number>",
        },        
        {
            name: "subjectDistance",
            baseName: "SubjectDistance",
            type: "number",
        },        
        {
            name: "subjectDistanceRange",
            baseName: "SubjectDistanceRange",
            type: "string",
        },        
        {
            name: "subjectLocation",
            baseName: "SubjectLocation",
            type: "Array<number>",
        },        
        {
            name: "subsecTime",
            baseName: "SubsecTime",
            type: "string",
        },        
        {
            name: "subsecTimeDigitized",
            baseName: "SubsecTimeDigitized",
            type: "string",
        },        
        {
            name: "subsecTimeOriginal",
            baseName: "SubsecTimeOriginal",
            type: "string",
        },        
        {
            name: "userComment",
            baseName: "UserComment",
            type: "string",
        },        
        {
            name: "whiteBalance",
            baseName: "WhiteBalance",
            type: "string",
        },        
        {
            name: "whitePoint",
            baseName: "WhitePoint",
            type: "Array<number>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ExifData.attributeTypeMap;
    }

    /**
     * Gets or sets the aperture.
     */
    public apertureValue: number;
    
    /**
     * Gets or sets the body serial number.
     */
    public bodySerialNumber: string;
    
    /**
     * Gets or sets the brightness.
     */
    public brightnessValue: number;
    
    /**
     * Gets or sets the CFA pattern.
     */
    public cFAPattern: string;
    
    /**
     * Gets or sets the camera owner name.
     */
    public cameraOwnerName: string;
    
    /**
     * Gets or sets the color space.
     */
    public colorSpace: string;
    
    /**
     * Gets or sets the components configuration.
     */
    public componentsConfiguration: string;
    
    /**
     * Gets or sets the compressed bits per pixel.
     */
    public compressedBitsPerPixel: number;
    
    /**
     * Gets or sets the contrast.
     */
    public contrast: string;
    
    /**
     * Gets or sets the value indincating if custom rendering is performed.
     */
    public customRendered: string;
    
    /**
     * Gets or sets date and time when image was digitized.
     */
    public dateTimeDigitized: string;
    
    /**
     * Gets or sets date and time of the original image.
     */
    public dateTimeOriginal: string;
    
    /**
     * Gets or sets the device setting description.
     */
    public deviceSettingDescription: string;
    
    /**
     * Gets or sets the digital zoom ratio.
     */
    public digitalZoomRatio: number;
    
    /**
     * Gets or sets EXIF version.
     */
    public exifVersion: string;
    
    /**
     * Gets or sets the exposure bias.
     */
    public exposureBiasValue: number;
    
    /**
     * Gets or sets the exposure index.
     */
    public exposureIndex: number;
    
    /**
     * Gets or sets the exposure mode.
     */
    public exposureMode: string;
    
    /**
     * Gets or sets the exposure program.
     */
    public exposureProgram: string;
    
    /**
     * Gets or sets the exposure time.
     */
    public exposureTime: number;
    
    /**
     * Gets or sets the focal number.
     */
    public fNumber: number;
    
    /**
     * Gets or sets the file source.
     */
    public fileSource: string;
    
    /**
     * Gets or sets the flash.
     */
    public flash: string;
    
    /**
     * Gets or sets the flash energy.
     */
    public flashEnergy: number;
    
    /**
     * Gets or sets the Flashpix version.
     */
    public flashpixVersion: string;
    
    /**
     * Gets or sets the focal length.
     */
    public focalLength: number;
    
    /**
     * Gets or sets the focal length in 35mm film.
     */
    public focalLengthIn35MmFilm: number;
    
    /**
     * Gets or sets the focal plane resolution unit.
     */
    public focalPlaneResolutionUnit: string;
    
    /**
     * Gets or sets the focal plane X resolution.
     */
    public focalPlaneXResolution: number;
    
    /**
     * Gets or sets the focal plane Y resolution.
     */
    public focalPlaneYResolution: number;
    
    /**
     * Gets or sets the GPS altitude.
     */
    public gPSAltitude: number;
    
    /**
     * Gets or sets the GPS altitude reference (if it's above or below sea level).
     */
    public gPSAltitudeRef: string;
    
    /**
     * Gets or sets the GPS area information.
     */
    public gPSAreaInformation: string;
    
    /**
     * Gets or sets the GPS DOP (data degree of precision).
     */
    public GPSDOP: number;
    
    /**
     * Gets or sets the GPS bearing of the destination.
     */
    public gPSDestBearing: number;
    
    /**
     * Gets or sets the GPS reference unit for bearing of the destination.
     */
    public gPSDestBearingRef: string;
    
    /**
     * Gets or sets the GPS destination distance.
     */
    public gPSDestDistance: number;
    
    /**
     * Gets or sets the GPS reference unit for destination distance.
     */
    public gPSDestDistanceRef: string;
    
    /**
     * Gets or sets the GPS destination latitude.
     */
    public gPSDestLatitude: Array<number>;
    
    /**
     * Gets or sets the GPS reference destination latitude (north or south).
     */
    public gPSDestLatitudeRef: string;
    
    /**
     * Gets or sets the GPS destination longtitude.
     */
    public gPSDestLongitude: Array<number>;
    
    /**
     * Gets or sets the GPS reference destination longtitude (east or west).
     */
    public gPSDestLongitudeRef: string;
    
    /**
     * Gets or sets the GPS differential.
     */
    public gPSDifferential: number;
    
    /**
     * Gets or sets the GPS image direction.
     */
    public gPSImgDirection: number;
    
    /**
     * Gets or sets the GPS reference image direction.
     */
    public gPSImgDirectionRef: string;
    
    /**
     * Gets or sets the GPS date stamp.
     */
    public gPSDateStamp: string;
    
    /**
     * Gets or sets the GPS latitude.
     */
    public gPSLatitude: Array<number>;
    
    /**
     * Gets or sets the GPS latitude reference (north or south).
     */
    public gPSLatitudeRef: string;
    
    /**
     * Gets or sets the GPS longitude.
     */
    public gPSLongitude: Array<number>;
    
    /**
     * Gets or sets the GPS longitude reference (east or west).
     */
    public gPSLongitudeRef: string;
    
    /**
     * Gets or sets the geodetic survey data used by the GPS receiver.
     */
    public gPSMapDatum: string;
    
    /**
     * Gets or sets the GPS measure mode.
     */
    public gPSMeasureMode: string;
    
    /**
     * Gets or setsthe GPS processing method.
     */
    public gPSProcessingMethod: string;
    
    /**
     * Gets or sets the GPS satellites info.
     */
    public gPSSatellites: string;
    
    /**
     * Gets or sets the GPS speed.
     */
    public gPSSpeed: number;
    
    /**
     * Gets or sets the GPS speed reference unit.
     */
    public gPSSpeedRef: string;
    
    /**
     * Gets or sets the GPS status.
     */
    public gPSStatus: string;
    
    /**
     * Gets or sets the GPS times tamp.
     */
    public gPSTimestamp: Array<number>;
    
    /**
     * Gets or sets the GPS track.
     */
    public gPSTrack: string;
    
    /**
     * Gets or sets the GPS track reference.
     */
    public gPSTrackRef: string;
    
    /**
     * Gets or sets the GPS version ID.
     */
    public gPSVersionID: string;
    
    /**
     * Gets or sets the gain control.
     */
    public gainControl: string;
    
    /**
     * Gets or sets the gamma.
     */
    public gamma: number;
    
    /**
     * Gets or sets the ISO speed.
     */
    public iSOSpeed: number;
    
    /**
     * Gets or sets the ISO speed latitude YYY value.
     */
    public iSOSpeedLatitudeYYY: number;
    
    /**
     * Gets or sets the ISO speed latitude ZZZ value.
     */
    public iSOSpeedLatitudeZZZ: number;
    
    /**
     * Gets or sets the photographic sensitivity.
     */
    public photographicSensitivity: number;
    
    /**
     * Gets or sets the image unique ID.
     */
    public imageUniqueID: string;
    
    /**
     * Gets or sets the lens manufacturer.
     */
    public lensMake: string;
    
    /**
     * Gets or sets the lens model.
     */
    public lensModel: string;
    
    /**
     * Gets or sets the lens serial number.
     */
    public lensSerialNumber: string;
    
    /**
     * Gets or sets the lens specification.
     */
    public lensSpecification: Array<number>;
    
    /**
     * Gets or sets the light source.
     */
    public lightSource: string;
    
    /**
     * Gets or sets the maker note raw data.
     */
    public makerNoteRawData: string;
    
    /**
     * Gets or sets the max aperture.
     */
    public maxApertureValue: number;
    
    /**
     * Gets or sets the metering mode.
     */
    public meteringMode: string;
    
    /**
     * Gets or sets the OECF (Opto-Electric Conversion Function).
     */
    public OECF: string;
    
    /**
     * Gets or sets the pixel X dimension.
     */
    public pixelXDimension: number;
    
    /**
     * Gets or sets the pixel Y dimension.
     */
    public pixelYDimension: number;
    
    /**
     * Gets or sets the recommended exposure index.
     */
    public recommendedExposureIndex: number;
    
    /**
     * Gets or sets the related sound file.
     */
    public relatedSoundFile: string;
    
    /**
     * Gets or sets the saturation.
     */
    public saturation: string;
    
    /**
     * Gets or sets the scene capture type.
     */
    public sceneCaptureType: string;
    
    /**
     * Gets or sets the scene type.
     */
    public sceneType: number;
    
    /**
     * Gets or sets the sensing method.
     */
    public sensingMethod: string;
    
    /**
     * Gets or sets the sensitivity type.
     */
    public sensitivityType: number;
    
    /**
     * Gets or sets the sharpness.
     */
    public sharpness: number;
    
    /**
     * Gets or sets the shutter speed.
     */
    public shutterSpeedValue: number;
    
    /**
     * Gets or sets the spatial frequency response.
     */
    public spatialFrequencyResponse: string;
    
    /**
     * Gets or sets the spectral sensitivity.
     */
    public spectralSensitivity: string;
    
    /**
     * Gets or sets the standard output sensitivity.
     */
    public standardOutputSensitivity: number;
    
    /**
     * Gets or sets the subject area.
     */
    public subjectArea: Array<number>;
    
    /**
     * Gets or sets the subject distance.
     */
    public subjectDistance: number;
    
    /**
     * Gets or sets the subject distance range.
     */
    public subjectDistanceRange: string;
    
    /**
     * Gets or sets the subject location.
     */
    public subjectLocation: Array<number>;
    
    /**
     * Gets or sets the fractions of seconds for the DateTime tag.
     */
    public subsecTime: string;
    
    /**
     * Gets or sets the fractions of seconds for the DateTimeDigitized tag.
     */
    public subsecTimeDigitized: string;
    
    /**
     * Gets or sets the fractions of seconds for the DateTimeOriginal tag.
     */
    public subsecTimeOriginal: string;
    
    /**
     * Gets or sets the user comment.
     */
    public userComment: string;
    
    /**
     * Gets or sets the white balance.
     */
    public whiteBalance: string;
    
    /**
     * Gets or sets the white point.
     */
    public whitePoint: Array<number>;
    
    public constructor(init?: Partial<ExifData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about image in GIF format.
 */
export class GifProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "backgroundColor",
            baseName: "BackgroundColor",
            type: "string",
        },        
        {
            name: "hasBackgroundColor",
            baseName: "HasBackgroundColor",
            type: "boolean",
        },        
        {
            name: "hasTrailer",
            baseName: "HasTrailer",
            type: "boolean",
        },        
        {
            name: "pixelAspectRatio",
            baseName: "PixelAspectRatio",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return GifProperties.attributeTypeMap;
    }

    /**
     * Gets or sets the background color.
     */
    public backgroundColor: string;
    
    /**
     * Gets or sets a value indicating whether background color is used.
     */
    public hasBackgroundColor: boolean;
    
    /**
     * Gets or sets a value indicating whether image has trailer.
     */
    public hasTrailer: boolean;
    
    /**
     * Gets or sets the pixel aspect ratio.
     */
    public pixelAspectRatio: number;
    
    public constructor(init?: Partial<GifProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Duplicate images.
 */
export class ImageDuplicates {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "duplicateImages",
            baseName: "DuplicateImages",
            type: "Array<SearchResult>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ImageDuplicates.attributeTypeMap;
    }

    /**
     * Gets the array of duplicate images.
     */
    public duplicateImages: Array<SearchResult>;
    
    public constructor(init?: Partial<ImageDuplicates>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents JFIF data.
 */
export class JfifData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "densityUnits",
            baseName: "DensityUnits",
            type: "string",
        },        
        {
            name: "version",
            baseName: "Version",
            type: "number",
        },        
        {
            name: "xDensity",
            baseName: "XDensity",
            type: "number",
        },        
        {
            name: "yDensity",
            baseName: "YDensity",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return JfifData.attributeTypeMap;
    }

    /**
     * Gets or sets the density units.
     */
    public densityUnits: string;
    
    /**
     * Gets or sets the version.
     */
    public version: number;
    
    /**
     * Gets or sets the X density.
     */
    public xDensity: number;
    
    /**
     * Gets or sets the Y density.
     */
    public yDensity: number;
    
    public constructor(init?: Partial<JfifData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents JPEG2000 image type             
 */
export class Jpeg2000Codec {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Jpeg2000Codec.attributeTypeMap;
    }

    public constructor(init?: Partial<Jpeg2000Codec>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about image in JPEG2000 format.
 */
export class Jpeg2000Properties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "comments",
            baseName: "Comments",
            type: "Array<string>",
        },        
        {
            name: "codec",
            baseName: "Codec",
            type: "Jpeg2000Codec",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Jpeg2000Properties.attributeTypeMap;
    }

    /**
     * Gets or sets the JPEG comment markers.
     */
    public comments: Array<string>;
    
    /**
     * Gets or sets the JPEG2000 codec
     */
    public codec: Jpeg2000Codec;
    
    public constructor(init?: Partial<Jpeg2000Properties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about image in JPEG format.
 */
export class JpegProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "comment",
            baseName: "Comment",
            type: "string",
        },        
        {
            name: "jpegExifData",
            baseName: "JpegExifData",
            type: "JpegExifData",
        },        
        {
            name: "jpegJfifData",
            baseName: "JpegJfifData",
            type: "JfifData",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return JpegProperties.attributeTypeMap;
    }

    /**
     * Gets or sets the comment.
     */
    public comment: string;
    
    /**
     * Gets or sets the JPEG EXIF data.
     */
    public jpegExifData: JpegExifData;
    
    /**
     * Gets or sets the JPEG JFIF data.
     */
    public jpegJfifData: JfifData;
    
    public constructor(init?: Partial<JpegProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * ODG format metadata
 */
export class OdgMetadata {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "generator",
            baseName: "Generator",
            type: "string",
        },        
        {
            name: "title",
            baseName: "Title",
            type: "string",
        },        
        {
            name: "description",
            baseName: "Description",
            type: "string",
        },        
        {
            name: "subject",
            baseName: "Subject",
            type: "string",
        },        
        {
            name: "keywords",
            baseName: "Keywords",
            type: "string",
        },        
        {
            name: "initialCreator",
            baseName: "InitialCreator",
            type: "string",
        },        
        {
            name: "creator",
            baseName: "Creator",
            type: "string",
        },        
        {
            name: "printedBy",
            baseName: "PrintedBy",
            type: "string",
        },        
        {
            name: "creationDateTime",
            baseName: "CreationDateTime",
            type: "string",
        },        
        {
            name: "modificationDateTime",
            baseName: "ModificationDateTime",
            type: "string",
        },        
        {
            name: "printDateTime",
            baseName: "PrintDateTime",
            type: "string",
        },        
        {
            name: "documentTemplate",
            baseName: "DocumentTemplate",
            type: "string",
        },        
        {
            name: "automaticReload",
            baseName: "AutomaticReload",
            type: "string",
        },        
        {
            name: "hyperlinkBehavior",
            baseName: "HyperlinkBehavior",
            type: "string",
        },        
        {
            name: "language",
            baseName: "Language",
            type: "string",
        },        
        {
            name: "editingCycles",
            baseName: "EditingCycles",
            type: "string",
        },        
        {
            name: "editingDuration",
            baseName: "EditingDuration",
            type: "string",
        },        
        {
            name: "documentStatistics",
            baseName: "DocumentStatistics",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OdgMetadata.attributeTypeMap;
    }

    /**
     * Gets or sets the generator.             
     */
    public generator: string;
    
    /**
     * Gets or sets the title.             
     */
    public title: string;
    
    /**
     * Gets or sets the description.             
     */
    public description: string;
    
    /**
     * Gets or sets the subject.             
     */
    public subject: string;
    
    /**
     * Gets or sets the keywords.             
     */
    public keywords: string;
    
    /**
     * Gets or sets the initial creator.             
     */
    public initialCreator: string;
    
    /**
     * Gets or sets the creator.             
     */
    public creator: string;
    
    /**
     * Gets or sets the \"PrintedBy\" record.             
     */
    public printedBy: string;
    
    /**
     * Gets or sets the creation date and time.             
     */
    public creationDateTime: string;
    
    /**
     * Gets or sets the modification date and time.             
     */
    public modificationDateTime: string;
    
    /**
     * Gets or sets the print date and time.             
     */
    public printDateTime: string;
    
    /**
     * Gets or sets the document template.             
     */
    public documentTemplate: string;
    
    /**
     * Gets or sets the automatic reload.             
     */
    public automaticReload: string;
    
    /**
     * Gets or sets the hyperlink behavior.             
     */
    public hyperlinkBehavior: string;
    
    /**
     * Gets or sets the language.             
     */
    public language: string;
    
    /**
     * Gets or sets the editing cycles.             
     */
    public editingCycles: string;
    
    /**
     * Gets or sets the duration of the editing.             
     */
    public editingDuration: string;
    
    /**
     * Gets or sets the document statistics.             
     */
    public documentStatistics: string;
    
    public constructor(init?: Partial<OdgMetadata>) {
        
        Object.assign(this, init);
    }        
}

/**
 * ODG page info
 */
export class OdgPage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OdgPage.attributeTypeMap;
    }

    /**
     * Gets or sets the width.
     */
    public width: number;
    
    /**
     * Gets or sets the height.
     */
    public height: number;
    
    public constructor(init?: Partial<OdgPage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * ODG format specific properties
 */
export class OdgProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },        
        {
            name: "metadata",
            baseName: "Metadata",
            type: "OdgMetadata",
        },        
        {
            name: "pages",
            baseName: "Pages",
            type: "Array<OdgPage>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OdgProperties.attributeTypeMap;
    }

    /**
     * Gets or sets the page count.
     */
    public pageCount: number;
    
    /**
     * Gets or sets the metadata.
     */
    public metadata: OdgMetadata;
    
    /**
     * Gets or sets the pages.
     */
    public pages: Array<OdgPage>;
    
    public constructor(init?: Partial<OdgProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about image in PNG format.
 */
export class PngProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PngProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<PngProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about PSD image
 */
export class PsdProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "bitsPerChannel",
            baseName: "BitsPerChannel",
            type: "number",
        },        
        {
            name: "channelsCount",
            baseName: "ChannelsCount",
            type: "number",
        },        
        {
            name: "colorMode",
            baseName: "ColorMode",
            type: "string",
        },        
        {
            name: "compression",
            baseName: "Compression",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PsdProperties.attributeTypeMap;
    }

    /**
     * Gets or sets the bits per channel.
     */
    public bitsPerChannel: number;
    
    /**
     * Gets or sets the channels count.
     */
    public channelsCount: number;
    
    /**
     * Gets or sets the color mode.
     */
    public colorMode: string;
    
    /**
     * Gets or sets the compression.
     */
    public compression: string;
    
    public constructor(init?: Partial<PsdProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Search result.
 */
export class SearchResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "imageId",
            baseName: "ImageId",
            type: "string",
        },        
        {
            name: "similarity",
            baseName: "Similarity",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SearchResult.attributeTypeMap;
    }

    /**
     * Gets the image identifier.
     */
    public imageId: string;
    
    /**
     * Gets the similarity.
     */
    public similarity: number;
    
    public constructor(init?: Partial<SearchResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about TIFF frame.
 */
export class TiffFrame {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "frameOptions",
            baseName: "FrameOptions",
            type: "TiffOptions",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "exifData",
            baseName: "ExifData",
            type: "ExifData",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TiffFrame.attributeTypeMap;
    }

    /**
     * Gets or sets options for the frame.
     */
    public frameOptions: TiffOptions;
    
    /**
     * Gets or sets the frame height.
     */
    public height: number;
    
    /**
     * Gets or sets the frame width.
     */
    public width: number;
    
    /**
     * Gets or sets the EXIF data.
     */
    public exifData: ExifData;
    
    public constructor(init?: Partial<TiffFrame>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents options for TIFF frame.
 */
export class TiffOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "isValid",
            baseName: "IsValid",
            type: "boolean",
        },        
        {
            name: "artist",
            baseName: "Artist",
            type: "string",
        },        
        {
            name: "byteOrder",
            baseName: "ByteOrder",
            type: "string",
        },        
        {
            name: "bitsPerSample",
            baseName: "BitsPerSample",
            type: "Array<number>",
        },        
        {
            name: "compression",
            baseName: "Compression",
            type: "string",
        },        
        {
            name: "copyright",
            baseName: "Copyright",
            type: "string",
        },        
        {
            name: "colorMap",
            baseName: "ColorMap",
            type: "Array<number>",
        },        
        {
            name: "dateTime",
            baseName: "DateTime",
            type: "string",
        },        
        {
            name: "documentName",
            baseName: "DocumentName",
            type: "string",
        },        
        {
            name: "alphaStorage",
            baseName: "AlphaStorage",
            type: "string",
        },        
        {
            name: "fillOrder",
            baseName: "FillOrder",
            type: "string",
        },        
        {
            name: "halfToneHints",
            baseName: "HalfToneHints",
            type: "Array<number>",
        },        
        {
            name: "imageDescription",
            baseName: "ImageDescription",
            type: "string",
        },        
        {
            name: "inkNames",
            baseName: "InkNames",
            type: "string",
        },        
        {
            name: "scannerManufacturer",
            baseName: "ScannerManufacturer",
            type: "string",
        },        
        {
            name: "maxSampleValue",
            baseName: "MaxSampleValue",
            type: "Array<number>",
        },        
        {
            name: "minSampleValue",
            baseName: "MinSampleValue",
            type: "Array<number>",
        },        
        {
            name: "scannerModel",
            baseName: "ScannerModel",
            type: "string",
        },        
        {
            name: "pageName",
            baseName: "PageName",
            type: "string",
        },        
        {
            name: "orientation",
            baseName: "Orientation",
            type: "string",
        },        
        {
            name: "pageNumber",
            baseName: "PageNumber",
            type: "Array<number>",
        },        
        {
            name: "photometric",
            baseName: "Photometric",
            type: "string",
        },        
        {
            name: "planarConfiguration",
            baseName: "PlanarConfiguration",
            type: "string",
        },        
        {
            name: "resolutionUnit",
            baseName: "ResolutionUnit",
            type: "string",
        },        
        {
            name: "rowsPerStrip",
            baseName: "RowsPerStrip",
            type: "number",
        },        
        {
            name: "sampleFormat",
            baseName: "SampleFormat",
            type: "Array<string>",
        },        
        {
            name: "samplesPerPixel",
            baseName: "SamplesPerPixel",
            type: "number",
        },        
        {
            name: "smaxSampleValue",
            baseName: "SmaxSampleValue",
            type: "Array<number>",
        },        
        {
            name: "sminSampleValue",
            baseName: "SminSampleValue",
            type: "Array<number>",
        },        
        {
            name: "softwareType",
            baseName: "SoftwareType",
            type: "string",
        },        
        {
            name: "stripByteCounts",
            baseName: "StripByteCounts",
            type: "Array<number>",
        },        
        {
            name: "stripOffsets",
            baseName: "StripOffsets",
            type: "Array<number>",
        },        
        {
            name: "subFileType",
            baseName: "SubFileType",
            type: "string",
        },        
        {
            name: "targetPrinter",
            baseName: "TargetPrinter",
            type: "string",
        },        
        {
            name: "threshholding",
            baseName: "Threshholding",
            type: "string",
        },        
        {
            name: "totalPages",
            baseName: "TotalPages",
            type: "number",
        },        
        {
            name: "xposition",
            baseName: "Xposition",
            type: "number",
        },        
        {
            name: "xresolution",
            baseName: "Xresolution",
            type: "number",
        },        
        {
            name: "yposition",
            baseName: "Yposition",
            type: "number",
        },        
        {
            name: "yresolution",
            baseName: "Yresolution",
            type: "number",
        },        
        {
            name: "faxT4Options",
            baseName: "FaxT4Options",
            type: "string",
        },        
        {
            name: "predictor",
            baseName: "Predictor",
            type: "string",
        },        
        {
            name: "imageLength",
            baseName: "ImageLength",
            type: "number",
        },        
        {
            name: "imageWidth",
            baseName: "ImageWidth",
            type: "number",
        },        
        {
            name: "validTagCount",
            baseName: "ValidTagCount",
            type: "number",
        },        
        {
            name: "bitsPerPixel",
            baseName: "BitsPerPixel",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TiffOptions.attributeTypeMap;
    }

    /**
     * Gets or sets a value indicating whether TIFF image has valid data.
     */
    public isValid: boolean;
    
    /**
     * Gets or sets the artist.
     */
    public artist: string;
    
    /**
     * Gets or sets the byte order.
     */
    public byteOrder: string;
    
    /**
     * Gets or sets the bits per sample.
     */
    public bitsPerSample: Array<number>;
    
    /**
     * Gets or sets the compression.
     */
    public compression: string;
    
    /**
     * Gets or sets the copyright info.
     */
    public copyright: string;
    
    /**
     * Gets or sets the color map.
     */
    public colorMap: Array<number>;
    
    /**
     * Gets or sets the date and time.
     */
    public dateTime: string;
    
    /**
     * Gets or sets the document name.
     */
    public documentName: string;
    
    /**
     * Gets or sets the alpha storage.
     */
    public alphaStorage: string;
    
    /**
     * Gets or sets the fill order.
     */
    public fillOrder: string;
    
    /**
     * Gets or sets the half-tone hints.
     */
    public halfToneHints: Array<number>;
    
    /**
     * Gets or sets the image description.
     */
    public imageDescription: string;
    
    /**
     * Gets or sets the ink names.
     */
    public inkNames: string;
    
    /**
     * Gets or sets the scanner manufacturer.
     */
    public scannerManufacturer: string;
    
    /**
     * Gets or sets the max sample value.
     */
    public maxSampleValue: Array<number>;
    
    /**
     * Gets or sets the min sample value.
     */
    public minSampleValue: Array<number>;
    
    /**
     * Gets or sets the scanner model.
     */
    public scannerModel: string;
    
    /**
     * Gets or sets the page name.
     */
    public pageName: string;
    
    /**
     * Gets or sets the orientation.
     */
    public orientation: string;
    
    /**
     * Gets or sets the page number.
     */
    public pageNumber: Array<number>;
    
    /**
     * Gets or sets the photometric interpretation.
     */
    public photometric: string;
    
    /**
     * Gets or sets the planar configuration.
     */
    public planarConfiguration: string;
    
    /**
     * Gets or sets the resolution unit.
     */
    public resolutionUnit: string;
    
    /**
     * Gets or sets the rows per strip.
     */
    public rowsPerStrip: number;
    
    /**
     * Gets or sets the sample format.
     */
    public sampleFormat: Array<string>;
    
    /**
     * Gets or sets the samples per pixel.
     */
    public samplesPerPixel: number;
    
    /**
     * Gets or sets the Smax sample value.
     */
    public smaxSampleValue: Array<number>;
    
    /**
     * Gets or sets the Smin sample value.
     */
    public sminSampleValue: Array<number>;
    
    /**
     * Gets or sets the software type.
     */
    public softwareType: string;
    
    /**
     * Gets or sets the strip byte counts.
     */
    public stripByteCounts: Array<number>;
    
    /**
     * Gets or sets the strip offsets.
     */
    public stripOffsets: Array<number>;
    
    /**
     * Gets or sets the subfile type.
     */
    public subFileType: string;
    
    /**
     * Gets or sets the target printer.
     */
    public targetPrinter: string;
    
    /**
     * Gets or sets the threshholding.
     */
    public threshholding: string;
    
    /**
     * Gets or sets the total pages count.
     */
    public totalPages: number;
    
    /**
     * Gets or sets the X position.
     */
    public xposition: number;
    
    /**
     * Gets or sets the X resolution.
     */
    public xresolution: number;
    
    /**
     * Gets or sets the Y position.
     */
    public yposition: number;
    
    /**
     * Gets or sets the Y resolution.
     */
    public yresolution: number;
    
    /**
     * Gets or sets the FaxT4 Options.
     */
    public faxT4Options: string;
    
    /**
     * Gets or sets the predictor (a mathematical operator that is applied to the image data before an encoding scheme is applied).
     */
    public predictor: string;
    
    /**
     * Gets or sets the image length.
     */
    public imageLength: number;
    
    /**
     * Gets or sets the image width.
     */
    public imageWidth: number;
    
    /**
     * Gets or sets the valid tag count.
     */
    public validTagCount: number;
    
    /**
     * Gets or sets the bits per pixel.
     */
    public bitsPerPixel: number;
    
    public constructor(init?: Partial<TiffOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents properties of TIFF image.
 */
export class TiffProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "byteOrder",
            baseName: "ByteOrder",
            type: "string",
        },        
        {
            name: "exifData",
            baseName: "ExifData",
            type: "ExifData",
        },        
        {
            name: "frames",
            baseName: "Frames",
            type: "Array<TiffFrame>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TiffProperties.attributeTypeMap;
    }

    /**
     * Gets or sets the byte order.
     */
    public byteOrder: string;
    
    /**
     * Gets or sets the EXIF data.
     */
    public exifData: ExifData;
    
    /**
     * Frames information.
     */
    public frames: Array<TiffFrame>;
    
    public constructor(init?: Partial<TiffProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about image in WEBP format.
 */
export class WebPProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "lossless",
            baseName: "Lossless",
            type: "boolean",
        },        
        {
            name: "quality",
            baseName: "Quality",
            type: "number",
        },        
        {
            name: "animLoopCount",
            baseName: "AnimLoopCount",
            type: "number",
        },        
        {
            name: "animBackgroundColor",
            baseName: "AnimBackgroundColor",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WebPProperties.attributeTypeMap;
    }

    /**
     * Gets or sets a value indicating whether these  is lossless.
     */
    public lossless: boolean;
    
    /**
     * Gets or sets the quality.
     */
    public quality: number;
    
    /**
     * Gets or sets the animation loop count.
     */
    public animLoopCount: number;
    
    /**
     * Gets or sets the color of the animation background.
     */
    public animBackgroundColor: number;
    
    public constructor(init?: Partial<WebPProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Duplicate images set.  
 */
export class ImageDuplicatesSet extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "duplicates",
            baseName: "Duplicates",
            type: "Array<ImageDuplicates>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageDuplicatesSet.attributeTypeMap);
    }

    /**
     * Gets the duplicate images.
     */
    public duplicates: Array<ImageDuplicates>;
    
    public constructor(init?: Partial<ImageDuplicatesSet>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Image features.
 */
export class ImageFeatures extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "imageId",
            baseName: "ImageId",
            type: "string",
        },        
        {
            name: "featuresCount",
            baseName: "FeaturesCount",
            type: "number",
        },        
        {
            name: "featureLengthInBits",
            baseName: "FeatureLengthInBits",
            type: "number",
        },        
        {
            name: "features",
            baseName: "Features",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageFeatures.attributeTypeMap);
    }

    /**
     * Gets the image identifier.
     */
    public imageId: string;
    
    /**
     * Gets the features count.
     */
    public featuresCount: number;
    
    /**
     * Gets the feature length in bits.
     */
    public featureLengthInBits: number;
    
    /**
     * Gets the features.
     */
    public features: string;
    
    public constructor(init?: Partial<ImageFeatures>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents information about image.
 */
export class ImagingResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "bitsPerPixel",
            baseName: "BitsPerPixel",
            type: "number",
        },        
        {
            name: "bmpProperties",
            baseName: "BmpProperties",
            type: "BmpProperties",
        },        
        {
            name: "gifProperties",
            baseName: "GifProperties",
            type: "GifProperties",
        },        
        {
            name: "jpegProperties",
            baseName: "JpegProperties",
            type: "JpegProperties",
        },        
        {
            name: "pngProperties",
            baseName: "PngProperties",
            type: "PngProperties",
        },        
        {
            name: "tiffProperties",
            baseName: "TiffProperties",
            type: "TiffProperties",
        },        
        {
            name: "psdProperties",
            baseName: "PsdProperties",
            type: "PsdProperties",
        },        
        {
            name: "djvuProperties",
            baseName: "DjvuProperties",
            type: "DjvuProperties",
        },        
        {
            name: "webPProperties",
            baseName: "WebPProperties",
            type: "WebPProperties",
        },        
        {
            name: "jpeg2000Properties",
            baseName: "Jpeg2000Properties",
            type: "Jpeg2000Properties",
        },        
        {
            name: "dicomProperties",
            baseName: "DicomProperties",
            type: "DicomProperties",
        },        
        {
            name: "dngProperties",
            baseName: "DngProperties",
            type: "DngProperties",
        },        
        {
            name: "odgProperties",
            baseName: "OdgProperties",
            type: "OdgProperties",
        },        
        {
            name: "horizontalResolution",
            baseName: "HorizontalResolution",
            type: "number",
        },        
        {
            name: "verticalResolution",
            baseName: "VerticalResolution",
            type: "number",
        },        
        {
            name: "isCached",
            baseName: "IsCached",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImagingResponse.attributeTypeMap);
    }

    /**
     * Gets or sets the height of image.
     */
    public height: number;
    
    /**
     * Gets or sets the width of image.
     */
    public width: number;
    
    /**
     * Gets or sets the bits per pixel for image.
     */
    public bitsPerPixel: number;
    
    /**
     * Gets or sets the BMP properties.
     */
    public bmpProperties: BmpProperties;
    
    /**
     * Gets or sets the GIF properties.
     */
    public gifProperties: GifProperties;
    
    /**
     * Gets or sets the JPEG properties.
     */
    public jpegProperties: JpegProperties;
    
    /**
     * Gets or sets the PNG properties.
     */
    public pngProperties: PngProperties;
    
    /**
     * Gets or sets the TIFF properties.
     */
    public tiffProperties: TiffProperties;
    
    /**
     * Gets or sets the PSD properties.
     */
    public psdProperties: PsdProperties;
    
    /**
     * Gets or sets the DJVU properties.
     */
    public djvuProperties: DjvuProperties;
    
    /**
     * Gets or sets the WEBP properties.
     */
    public webPProperties: WebPProperties;
    
    /**
     * Gets or sets the JPEG2000 properties.
     */
    public jpeg2000Properties: Jpeg2000Properties;
    
    /**
     * Gets or sets the DICOM properties.
     */
    public dicomProperties: DicomProperties;
    
    /**
     * Gets or sets the DNG properties.
     */
    public dngProperties: DngProperties;
    
    /**
     * Gets or sets the the ODG properties.
     */
    public odgProperties: OdgProperties;
    
    /**
     * Gets or sets the horizontal resolution of an image.
     */
    public horizontalResolution: number;
    
    /**
     * Gets or sets the vertical resolution of an image.
     */
    public verticalResolution: number;
    
    /**
     * Gets or sets a value indicating whether image is cached.
     */
    public isCached: boolean;
    
    public constructor(init?: Partial<ImagingResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents EXIF data for JPEG
 */
export class JpegExifData extends ExifData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "artist",
            baseName: "Artist",
            type: "string",
        },        
        {
            name: "copyright",
            baseName: "Copyright",
            type: "string",
        },        
        {
            name: "dateTime",
            baseName: "DateTime",
            type: "string",
        },        
        {
            name: "imageDescription",
            baseName: "ImageDescription",
            type: "string",
        },        
        {
            name: "make",
            baseName: "Make",
            type: "string",
        },        
        {
            name: "model",
            baseName: "Model",
            type: "string",
        },        
        {
            name: "orientation",
            baseName: "Orientation",
            type: "string",
        },        
        {
            name: "primaryChromaticities",
            baseName: "PrimaryChromaticities",
            type: "Array<number>",
        },        
        {
            name: "referenceBlackWhite",
            baseName: "ReferenceBlackWhite",
            type: "Array<number>",
        },        
        {
            name: "resolutionUnit",
            baseName: "ResolutionUnit",
            type: "string",
        },        
        {
            name: "software",
            baseName: "Software",
            type: "string",
        },        
        {
            name: "transferFunction",
            baseName: "TransferFunction",
            type: "Array<number>",
        },        
        {
            name: "xResolution",
            baseName: "XResolution",
            type: "number",
        },        
        {
            name: "yCbCrCoefficients",
            baseName: "YCbCrCoefficients",
            type: "Array<number>",
        },        
        {
            name: "yCbCrPositioning",
            baseName: "YCbCrPositioning",
            type: "string",
        },        
        {
            name: "yResolution",
            baseName: "YResolution",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpegExifData.attributeTypeMap);
    }

    /**
     * Gets or sets the artist.
     */
    public artist: string;
    
    /**
     * Gets or sets the copyright info.
     */
    public copyright: string;
    
    /**
     * Gets or sets the date and time.
     */
    public dateTime: string;
    
    /**
     * Gets or sets the image description.
     */
    public imageDescription: string;
    
    /**
     * Gets or sets the manufacturer.
     */
    public make: string;
    
    /**
     * Gets or sets the model.
     */
    public model: string;
    
    /**
     * Gets or sets the orientation.
     */
    public orientation: string;
    
    /**
     * Gets or sets the primary chromaticities.
     */
    public primaryChromaticities: Array<number>;
    
    /**
     * Gets or sets the reference black and white.
     */
    public referenceBlackWhite: Array<number>;
    
    /**
     * Gets or sets the resolution unit.
     */
    public resolutionUnit: string;
    
    /**
     * Gets or sets the software.
     */
    public software: string;
    
    /**
     * Gets or sets the transfer function.
     */
    public transferFunction: Array<number>;
    
    /**
     * Gets or sets the X resolution.
     */
    public xResolution: number;
    
    /**
     * Gets or sets the YCbCr coefficients.
     */
    public yCbCrCoefficients: Array<number>;
    
    /**
     * Gets or sets the YCbCr positioning.
     */
    public yCbCrPositioning: string;
    
    /**
     * Gets or sets the Y resolution.
     */
    public yResolution: number;
    
    public constructor(init?: Partial<JpegExifData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Search context status.
 */
export class SearchContextStatus extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "id",
            baseName: "Id",
            type: "string",
        },        
        {
            name: "searchStatus",
            baseName: "SearchStatus",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchContextStatus.attributeTypeMap);
    }

    /**
     * Gets or sets the identifier.
     */
    public id: string;
    
    /**
     * Gets or sets the status.
     */
    public searchStatus: string;
    
    public constructor(init?: Partial<SearchContextStatus>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Search results set.
 */
export class SearchResultsSet extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "results",
            baseName: "Results",
            type: "Array<SearchResult>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchResultsSet.attributeTypeMap);
    }

    /**
     * Gets the results.
     */
    public results: Array<SearchResult>;
    
    public constructor(init?: Partial<SearchResultsSet>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
};

const typeMap = {
            BmpProperties,
            DicomProperties,
            DjvuProperties,
            DngProperties,
            ExifData,
            GifProperties,
            ImageDuplicates,
            JfifData,
            Jpeg2000Codec,
            Jpeg2000Properties,
            JpegProperties,
            OdgMetadata,
            OdgPage,
            OdgProperties,
            PngProperties,
            PsdProperties,
            SearchResult,
            TiffFrame,
            TiffOptions,
            TiffProperties,
            WebPProperties,
            ImageDuplicatesSet,
            ImageFeatures,
            ImagingResponse,
            JpegExifData,
            SearchContextStatus,
            SearchResultsSet,
};

export {enumsMap, typeMap};

/**
 * Request model for DeleteSearchContext operation.
 */
export class DeleteSearchContextRequest {
    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<DeleteSearchContextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteSearchContextImage operation.
 */
export class DeleteSearchContextImageRequest {
    /**
     * Search context identifier.
     */
    public searchContextId: string;

    /**
     * Image identifier.
     */
    public imageId: string;

    /**
     * Folder.
     */
    public folder: string;

    /**
     * Storage
     */
    public storage: string;
    
    public constructor(init?: Partial<DeleteSearchContextImageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteSearchContextImageFeatures operation.
 */
export class DeleteSearchContextImageFeaturesRequest {
    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The image identifier.
     */
    public imageId: string;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<DeleteSearchContextImageFeaturesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageBmp operation.
 */
export class GetImageBmpRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Color depth.
     */
    public bitsPerPixel: number;

    /**
     * New horizontal resolution.
     */
    public horizontalResolution: number;

    /**
     * New vertical resolution.
     */
    public verticalResolution: number;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageBmpRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageCrop operation.
 */
export class GetImageCropRequest {
    /**
     * Filename of an image.
     */
    public name: string;

    /**
     * Resulting image format. Currently, BMP, PSD, JPG, TIFF, GIF, PNG, J2K and WEBP are supported.
     */
    public format: string;

    /**
     * X position of start point for cropping rectangle.
     */
    public x: number;

    /**
     * Y position of start point for cropping rectangle.
     */
    public y: number;

    /**
     * Width of cropping rectangle
     */
    public width: number;

    /**
     * Height of cropping rectangle.
     */
    public height: number;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageCropRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageDicom operation.
 */
export class GetImageDicomRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageDicomRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageDng operation.
 */
export class GetImageDngRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageDngRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageEmf operation.
 */
export class GetImageEmfRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Color of the background.
     */
    public bkColor: string;

    /**
     * Width of the page.
     */
    public pageWidth: number;

    /**
     * Height of the page.
     */
    public pageHeight: number;

    /**
     * Border width.
     */
    public borderX: number;

    /**
     * Border height.
     */
    public borderY: number;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageEmfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageFrame operation.
 */
export class GetImageFrameRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Number of a frame.
     */
    public frameId: number;

    /**
     * New width.
     */
    public newWidth: number;

    /**
     * New height.
     */
    public newHeight: number;

    /**
     * X position of start point for cropping rectangle.
     */
    public x: number;

    /**
     * Y position of start point for cropping rectangle.
     */
    public y: number;

    /**
     * Width of cropping rectangle.
     */
    public rectWidth: number;

    /**
     * Height of cropping rectangle.
     */
    public rectHeight: number;

    /**
     * RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone.
     */
    public rotateFlipMethod: string;

    /**
     * If result will include all other frames or just a specified frame.
     */
    public saveOtherFrames: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageFrameRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageFrameProperties operation.
 */
export class GetImageFramePropertiesRequest {
    /**
     * Filename with image.
     */
    public name: string;

    /**
     * Number of a frame.
     */
    public frameId: number;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageFramePropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageGif operation.
 */
export class GetImageGifRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Index of the background color.
     */
    public backgroundColorIndex: number;

    /**
     * Color resolution.
     */
    public colorResolution: number;

    /**
     * Specifies if image has trailer.
     */
    public hasTrailer: boolean;

    /**
     * Specifies if image is interlaced.
     */
    public interlaced: boolean;

    /**
     * Specifies if palette is sorted.
     */
    public isPaletteSorted: boolean;

    /**
     * Pixel aspect ratio.
     */
    public pixelAspectRatio: number;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageGifRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageJpeg2000 operation.
 */
export class GetImageJpeg2000Request {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * The comment.
     */
    public comment: string;

    /**
     * The codec.
     */
    public codec: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageJpeg2000Request>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageJpg operation.
 */
export class GetImageJpgRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Quality of an image from 0 to 100. Default is 75.
     */
    public quality: number;

    /**
     * Compression type.
     */
    public compressionType: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageJpgRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageOdg operation.
 */
export class GetImageOdgRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageOdgRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImagePng operation.
 */
export class GetImagePngRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImagePngRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageProperties operation.
 */
export class GetImagePropertiesRequest {
    /**
     * Filename of an image.
     */
    public name: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImagePropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImagePsd operation.
 */
export class GetImagePsdRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Count of color channels.
     */
    public channelsCount: number;

    /**
     * Compression method.
     */
    public compressionMethod: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImagePsdRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageResize operation.
 */
export class GetImageResizeRequest {
    /**
     * Filename of an image.
     */
    public name: string;

    /**
     * Resulting image format. Currently, BMP, PSD, JPG, TIFF, GIF, PNG, J2K and WEBP are supported.
     */
    public format: string;

    /**
     * New width.
     */
    public newWidth: number;

    /**
     * New height.
     */
    public newHeight: number;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageResizeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageRotateFlip operation.
 */
export class GetImageRotateFlipRequest {
    /**
     * Filename of an image.
     */
    public name: string;

    /**
     * Resulting image format. Currently, BMP, PSD, JPG, TIFF, GIF, PNG, J2K and WEBP are supported.
     */
    public format: string;

    /**
     * RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY).
     */
    public method: string;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageRotateFlipRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageSaveAs operation.
 */
export class GetImageSaveAsRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Resulting image format. Currently, BMP, PSD, JPG, TIFF, GIF, PNG, J2K and WEBP are supported.
     */
    public format: string;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageSaveAsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageTiff operation.
 */
export class GetImageTiffRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Compression.
     */
    public compression: string;

    /**
     * New resolution unit.
     */
    public resolutionUnit: string;

    /**
     * Bit depth.
     */
    public bitDepth: number;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * New horizontal resolution.
     */
    public horizontalResolution: number;

    /**
     * New verstical resolution.
     */
    public verticalResolution: number;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageTiffRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageUpdate operation.
 */
export class GetImageUpdateRequest {
    /**
     * Filename of an image.
     */
    public name: string;

    /**
     * Resulting image format. Currently, BMP, PSD, JPG, TIFF, GIF, PNG, J2K and WEBP are supported.
     */
    public format: string;

    /**
     * New width of the scaled image.
     */
    public newWidth: number;

    /**
     * New height of the scaled image.
     */
    public newHeight: number;

    /**
     * X position of start point for cropping rectangle.
     */
    public x: number;

    /**
     * Y position of start point for cropping rectangle.
     */
    public y: number;

    /**
     * Width of cropping rectangle.
     */
    public rectWidth: number;

    /**
     * Height of cropping rectangle.
     */
    public rectHeight: number;

    /**
     * RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone.
     */
    public rotateFlipMethod: string;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageUpdateRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageWebP operation.
 */
export class GetImageWebPRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * If WEBP is lossless.
     */
    public lossLess: boolean;

    /**
     * Quality.
     */
    public quality: number;

    /**
     * The animation loop count.
     */
    public animLoopCount: number;

    /**
     * Color of the animation background.
     */
    public animBackgroundColor: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageWebPRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetImageWmf operation.
 */
export class GetImageWmfRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Color of the background.
     */
    public bkColor: string;

    /**
     * Width of the page.
     */
    public pageWidth: number;

    /**
     * Height of the page.
     */
    public pageHeight: number;

    /**
     * Border width.
     */
    public borderX: number;

    /**
     * Border height.
     */
    public borderY: number;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetImageWmfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSearchContextExtractImageFeatures operation.
 */
export class GetSearchContextExtractImageFeaturesRequest {
    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The image identifier.
     */
    public imageId: string;

    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetSearchContextExtractImageFeaturesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSearchContextFindDuplicates operation.
 */
export class GetSearchContextFindDuplicatesRequest {
    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The similarity threshold.
     */
    public similarityThreshold: number;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetSearchContextFindDuplicatesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSearchContextFindSimilar operation.
 */
export class GetSearchContextFindSimilarRequest {
    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The similarity threshold.
     */
    public similarityThreshold: number;

    /**
     * The maximum count.
     */
    public maxCount: number;

    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * The search image identifier.
     */
    public imageId: string;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetSearchContextFindSimilarRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSearchContextImage operation.
 */
export class GetSearchContextImageRequest {
    /**
     * Search context identifier.
     */
    public searchContextId: string;

    /**
     * Image identifier.
     */
    public imageId: string;

    /**
     * Folder.
     */
    public folder: string;

    /**
     * Storage
     */
    public storage: string;
    
    public constructor(init?: Partial<GetSearchContextImageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSearchContextImageFeatures operation.
 */
export class GetSearchContextImageFeaturesRequest {
    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The image identifier.
     */
    public imageId: string;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetSearchContextImageFeaturesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSearchContextStatus operation.
 */
export class GetSearchContextStatusRequest {
    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetSearchContextStatusRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTiffToFax operation.
 */
export class GetTiffToFaxRequest {
    /**
     * Filename of image.
     */
    public name: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;

    /**
     * Folder with image to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;
    
    public constructor(init?: Partial<GetTiffToFaxRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostCreateSearchContext operation.
 */
export class PostCreateSearchContextRequest {
    /**
     * The image features detector.
     */
    public detector: string;

    /**
     * The matching algorithm.
     */
    public matchingAlgorithm: string;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostCreateSearchContextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageBmp operation.
 */
export class PostImageBmpRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Color depth.
     */
    public bitsPerPixel: number;

    /**
     * New horizontal resolution.
     */
    public horizontalResolution: number;

    /**
     * New vertical resolution.
     */
    public verticalResolution: number;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageBmpRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageCrop operation.
 */
export class PostImageCropRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Resulting image format. Currently, BMP, PSD, JPG, TIFF, GIF, PNG, J2K and WEBP are supported.
     */
    public format: string;

    /**
     * X position of start point for cropping rectangle.
     */
    public x: number;

    /**
     * Y position of start point for cropping rectangle.
     */
    public y: number;

    /**
     * Width of cropping rectangle.
     */
    public width: number;

    /**
     * Height of cropping rectangle.
     */
    public height: number;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageCropRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageDicom operation.
 */
export class PostImageDicomRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageDicomRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageDng operation.
 */
export class PostImageDngRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageDngRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageEmf operation.
 */
export class PostImageEmfRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Color of the background.
     */
    public bkColor: string;

    /**
     * Width of the page.
     */
    public pageWidth: number;

    /**
     * Height of the page.
     */
    public pageHeight: number;

    /**
     * Border width.
     */
    public borderX: number;

    /**
     * Border height.
     */
    public borderY: number;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageEmfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageFrame operation.
 */
export class PostImageFrameRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Number of a frame.
     */
    public frameId: number;

    /**
     * New width.
     */
    public newWidth: number;

    /**
     * New height.
     */
    public newHeight: number;

    /**
     * X position of start point for cropping rectangle.
     */
    public x: number;

    /**
     * Y position of start point for cropping rectangle.
     */
    public y: number;

    /**
     * Width of cropping rectangle.
     */
    public rectWidth: number;

    /**
     * Height of cropping rectangle.
     */
    public rectHeight: number;

    /**
     * RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone.
     */
    public rotateFlipMethod: string;

    /**
     * If result will include all other frames or just a specified frame.
     */
    public saveOtherFrames: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageFrameRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageFrameProperties operation.
 */
export class PostImageFramePropertiesRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Number of a frame.
     */
    public frameId: number;
    
    public constructor(init?: Partial<PostImageFramePropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageGif operation.
 */
export class PostImageGifRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Index of the background color.
     */
    public backgroundColorIndex: number;

    /**
     * Color resolution.
     */
    public colorResolution: number;

    /**
     * Specifies if image has trailer.
     */
    public hasTrailer: boolean;

    /**
     * Specifies if image is interlaced.
     */
    public interlaced: boolean;

    /**
     * Specifies if palette is sorted.
     */
    public isPaletteSorted: boolean;

    /**
     * Pixel aspect ratio.
     */
    public pixelAspectRatio: number;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageGifRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageJpeg2000 operation.
 */
export class PostImageJpeg2000Request {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * The comment.
     */
    public comment: string;

    /**
     * The codec.
     */
    public codec: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageJpeg2000Request>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageJpg operation.
 */
export class PostImageJpgRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Quality of an image from 0 to 100. Default is 75.
     */
    public quality: number;

    /**
     * Compression type.
     */
    public compressionType: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageJpgRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageOdg operation.
 */
export class PostImageOdgRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageOdgRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImagePng operation.
 */
export class PostImagePngRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImagePngRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageProperties operation.
 */
export class PostImagePropertiesRequest {
    /**
     * Input image
     */
    public imageData: Buffer;
    
    public constructor(init?: Partial<PostImagePropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImagePsd operation.
 */
export class PostImagePsdRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Count of color channels.
     */
    public channelsCount: number;

    /**
     * Compression method.
     */
    public compressionMethod: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImagePsdRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageResize operation.
 */
export class PostImageResizeRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Resulting image format. Currently, BMP, PSD, JPG, TIFF, GIF, PNG, J2K and WEBP are supported.
     */
    public format: string;

    /**
     * New width.
     */
    public newWidth: number;

    /**
     * New height.
     */
    public newHeight: number;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageResizeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageRotateFlip operation.
 */
export class PostImageRotateFlipRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Resulting image format. Currently, BMP, PSD, JPG, TIFF, GIF, PNG, J2K and WEBP are supported.
     */
    public format: string;

    /**
     * RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY).
     */
    public method: string;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageRotateFlipRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageSaveAs operation.
 */
export class PostImageSaveAsRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Resulting image format. Currently, BMP, PSD, JPG, TIFF, GIF, PNG, J2K and WEBP are supported.
     */
    public format: string;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageSaveAsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageTiff operation.
 */
export class PostImageTiffRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Compression.
     */
    public compression: string;

    /**
     * New resolution unit.
     */
    public resolutionUnit: string;

    /**
     * Bit depth.
     */
    public bitDepth: number;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * New horizontal resolution.
     */
    public horizontalResolution: number;

    /**
     * New verstical resolution.
     */
    public verticalResolution: number;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageTiffRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageUpdate operation.
 */
export class PostImageUpdateRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Resulting image format. Currently, BMP, PSD, JPG, TIFF, GIF, PNG, J2K and WEBP are supported.
     */
    public format: string;

    /**
     * New width of the scaled image.
     */
    public newWidth: number;

    /**
     * New height of the scaled image.
     */
    public newHeight: number;

    /**
     * X position of start point for cropping rectangle.
     */
    public x: number;

    /**
     * Y position of start point for cropping rectangle.
     */
    public y: number;

    /**
     * Width of cropping rectangle.
     */
    public rectWidth: number;

    /**
     * Height of cropping rectangle.
     */
    public rectHeight: number;

    /**
     * RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone.
     */
    public rotateFlipMethod: string;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageUpdateRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageWebP operation.
 */
export class PostImageWebPRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * If WEBP is lossless.
     */
    public lossLess: boolean;

    /**
     * Quality.
     */
    public quality: number;

    /**
     * The animation loop count.
     */
    public animLoopCount: number;

    /**
     * Color of the animation background.
     */
    public animBackgroundColor: string;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageWebPRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostImageWmf operation.
 */
export class PostImageWmfRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Color of the background.
     */
    public bkColor: string;

    /**
     * Width of the page.
     */
    public pageWidth: number;

    /**
     * Height of the page.
     */
    public pageHeight: number;

    /**
     * Border width.
     */
    public borderX: number;

    /**
     * Border height.
     */
    public borderY: number;

    /**
     * Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
     */
    public fromScratch: boolean;

    /**
     * Path to updated file (if this is empty, response contains streamed image).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostImageWmfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostSearchContextAddImage operation.
 */
export class PostSearchContextAddImageRequest {
    /**
     * Search context identifier.
     */
    public searchContextId: string;

    /**
     * Image identifier.
     */
    public imageId: string;

    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Folder.
     */
    public folder: string;

    /**
     * Storage
     */
    public storage: string;
    
    public constructor(init?: Partial<PostSearchContextAddImageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostSearchContextAddTag operation.
 */
export class PostSearchContextAddTagRequest {
    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The tag.
     */
    public tagName: string;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostSearchContextAddTagRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostSearchContextCompareImages operation.
 */
export class PostSearchContextCompareImagesRequest {
    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The first image Id in storage.
     */
    public imageId1: string;

    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * The second image Idin storage or null(if image loading in request).
     */
    public imageId2: string;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostSearchContextCompareImagesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostSearchContextExtractImageFeatures operation.
 */
export class PostSearchContextExtractImageFeaturesRequest {
    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * The image identifier.
     */
    public imageId: string;

    /**
     * Images folder.
     */
    public imagesFolder: string;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostSearchContextExtractImageFeaturesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostSearchContextFindByTags operation.
 */
export class PostSearchContextFindByTagsRequest {
    /**
     * Tags array for searching
     */
    public tags: string;

    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The similarity threshold.
     */
    public similarityThreshold: number;

    /**
     * The maximum count.
     */
    public maxCount: number;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostSearchContextFindByTagsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostTiffAppend operation.
 */
export class PostTiffAppendRequest {
    /**
     * Original image file name.
     */
    public name: string;

    /**
     * Image file name to be appended to original one.
     */
    public appendFile: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;

    /**
     * Folder with images to process.
     */
    public folder: string;
    
    public constructor(init?: Partial<PostTiffAppendRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutSearchContextImage operation.
 */
export class PutSearchContextImageRequest {
    /**
     * Search context identifier.
     */
    public searchContextId: string;

    /**
     * Image identifier.
     */
    public imageId: string;

    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * Folder.
     */
    public folder: string;

    /**
     * Storage
     */
    public storage: string;
    
    public constructor(init?: Partial<PutSearchContextImageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutSearchContextImageFeatures operation.
 */
export class PutSearchContextImageFeaturesRequest {
    /**
     * The search context identifier.
     */
    public searchContextId: string;

    /**
     * The image identifier.
     */
    public imageId: string;

    /**
     * Input image
     */
    public imageData: Buffer;

    /**
     * The folder.
     */
    public folder: string;

    /**
     * The storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutSearchContextImageFeaturesRequest>) {        
        Object.assign(this, init);
    } 
}