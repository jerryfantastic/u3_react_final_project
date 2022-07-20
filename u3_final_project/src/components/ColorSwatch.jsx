const ColorSwatch = (props) => {

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }




    return (
        <div className="color_swatch" style={{
            backgroundColor: `rgb(${props.colorSwatchRed}, ${props.colorSwatchGreen},${props.colorSwatchBlue})`
        }}>

            <span className="color_swatch_hex">{rgbToHex(props.colorSwatchRed, props.colorSwatchGreen, props.colorSwatchBlue)}</span>
        </div>
    )
}

export default ColorSwatch