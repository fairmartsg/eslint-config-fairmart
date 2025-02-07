declare module 'barcoder' {

    class Barcoder {
        validate(barcode: string): boolean
    }

    const barcoder: Barcoder
    export default barcoder
}
