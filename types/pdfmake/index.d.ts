// Type definitions for pdfmake 0.1
// Project: http://pdfmake.org
// Definitions by: Milen Stefanov <https://github.com/m1llen1um>
//                 Rajab Shakirov <https://github.com/radziksh>
//                 Enzo Volkmann <https://github.com/evolkmann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare module "pdfmake/build/vfs_fonts" {
    let pdfMake: {
        vfs: any;
        [name: string]: any;
    };
}

declare module "pdfmake/build/pdfmake" {
    let vfs: TFontFamily;
    let fonts: { [name: string]: TFontFamilyTypes };
    function createPdf(
        documentDefinitions: TDocumentDefinitions,
        tableLayouts?: any,
        fonts?: any,
        vfs?: any
    ): TCreatedPdf;

    type PageSize =
        | '4A0'
        | '2A0'
        | 'A0'
        | 'A1'
        | 'A2'
        | 'A3'
        | 'A4'
        | 'A5'
        | 'A6'
        | 'A7'
        | 'A8'
        | 'A9'
        | 'A10'
        | 'B0'
        | 'B1'
        | 'B2'
        | 'B3'
        | 'B4'
        | 'B5'
        | 'B6'
        | 'B7'
        | 'B8'
        | 'B9'
        | 'B10'
        | 'C0'
        | 'C1'
        | 'C2'
        | 'C3'
        | 'C4'
        | 'C5'
        | 'C6'
        | 'C7'
        | 'C8'
        | 'C9'
        | 'C10'
        | 'RA1'
        | 'RA2'
        | 'RA3'
        | 'RA4'
        | 'SRA1
        | 'SRA2'
        | 'SRA3'
        | 'SRA4'
        | 'EXECUTIVE'
        | 'FOLIO'
        | 'LEGAL'
        | 'LETTER'
        | 'TABLOID';

    enum PageOrientation {
        PORTRAIT = "PORTRAIT",
        LANDSCAPE = "LANDSCAPE"
    }

    let pdfMake: pdfMakeStatic;

    interface TFontFamily {
        [fontName: string]: string;
    }

    interface TFontFamilyTypes {
        normal?: string;
        bold?: string;
        italics?: string;
        bolditalics?: string;
    }

    interface TDocumentInformation {
        title?: string;
        author?: string;
        subject?: string;
        keywords?: string;
    }

    type TDocumentHeaderFooterFunction = (
        currentPage: number,
        pageCount: number,
        pageSize?: { width: number; height: number }
    ) => any;

    type Margins = number | [number, number] | [number, number, number, number];

    type Alignment = "left" | "right" | "justify" | "center" | string;

    interface Style {
        font?: any;
        fontSize?: number;
        fontFeatures?: any;
        bold?: boolean;
        italics?: boolean;
        alignment?: Alignment;
        color?: string;
        columnGap?: any;
        fillColor?: string;
        decoration?: any;
        decorationany?: any;
        decorationColor?: string;
        background?: any;
        lineHeight?: number;
        characterSpacing?: number;
        noWrap?: boolean;
        markerColor?: string;
        leadingIndent?: any;
        [additionalProperty: string]: any;
    }

    type TableRowFunction = (row: number) => number;

    interface TableLayoutFunctions {
        hLineWidth?: (i: number, node: any) => number;
        vLineWidth?: (i: number, node: any) => number;
        hLineColor?: (i: number, node: any) => string;
        vLineColor?: (i: number, node: any) => string;
        fillColor?: (i: number, node: any) => string;
        paddingLeft?: (i: number, node: any) => number;
        paddingRight?: (i: number, node: any) => number;
        paddingTop?: (i: number, node: any) => number;
        paddingBottom?: (i: number, node: any) => number;
    }

    interface TableCell {
        text: string;
        rowSpan?: number;
        colSpan?: number;
        fillColor?: string;
        border?: [boolean, boolean, boolean, boolean];
    }

    interface Table {
        body: Content[][] | TableCell[][];
        dontBreakRows?: boolean;
        headerRows?: number;
        heights?: Array<string | number> | TableRowFunction;
        layout?: string | TableLayoutFunctions;
        widths?: Array<string | number>;
    }

    interface Content {
        style?: string | string[];
        margin?: Margins;
        text?: string | string[] | Content[];
        columns?: Content[];
        stack?: Content[];
        image?: string;
        width?: string | number;
        height?: string | number;
        fit?: [number, number];
        pageBreak?: "before" | "after";
        alignment?: Alignment;
        table?: Table;
        ul?: Content[];
        ol?: Content[];
        [additionalProperty: string]: any;
    }

    interface TDocumentDefinitions {
        background?: () => string | string;
        compress?: boolean;
        content: string | Content;
        defaultStyle?: Style;
        footer?: TDocumentHeaderFooterFunction;
        header?: TDocumentHeaderFooterFunction;
        images?: { [key: string]: string };
        info?: TDocumentInformation;
        pageBreakBefore?: (
            currentNode?: CurrentNode,
            followingNodesOnPage?: any,
            nodesOnNextPage?: any,
            previousNodesOnPage?: any
        ) => boolean;
        pageMargins?: Margins;
        pageOrientation?: PageOrientation;
        pageSize?: PageSize;
        styles?: Style;
    }

    interface CurrentNode {
        id: string;
        headlineLevel: string;
        text: string | string[] | Content[];
        ul: Content[];
        ol: Content[];
        table: Table;
        image: string;
        qr: string;
        canvas: string;
        columns: Content[];
        style: string | string[];
        pageOrientation: PageOrientation;
        pageNumbers: number[];
        pages: number;
        stack: boolean;
        startPosition: {
            pageNumber: number;
            pageOrientation: PageOrientation;
            left: number;
            right: number;
            verticalRatio: number;
            horizontalRatio: number;
        };
    }

    interface Pagesize {
        height: number;
        width: number;
        orientation: PageOrientation;
    }

    interface Page {
        items: any[];
        pageSize: Pagesize;
    }

    interface BufferOptions {
        autoPrint?: boolean;
    }

    type CreatedPdfDownloadParams = (
        defaultFileName?: string,
        cb?: () => void,
        options?: BufferOptions
    ) => void;

    type CreatedPdfOpenPrintParams = (
        options?: BufferOptions,
        win?: Window | null
    ) => void;

    type CreatedPdfBufferParams = (
        cb: (result: any, pages: Page[]) => void,
        options?: BufferOptions
    ) => void;

    interface TCreatedPdf {
        download: CreatedPdfDownloadParams;
        getBlob: CreatedPdfBufferParams;
        getBase64: CreatedPdfBufferParams;
        getBuffer: CreatedPdfBufferParams;
        getDataUrl: CreatedPdfBufferParams;
        getStream: CreatedPdfBufferParams; // minimal version 0.1.41
        open: CreatedPdfOpenPrintParams;
        print: CreatedPdfOpenPrintParams;
    }

    interface pdfMakeStatic {
        vfs: TFontFamily;
        fonts: { [name: string]: TFontFamilyTypes };
        createPdf(documentDefinitions: TDocumentDefinitions): TCreatedPdf;
    }
}
