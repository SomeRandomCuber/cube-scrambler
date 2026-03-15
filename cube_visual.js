var whiteColor, redColor, greenColor, yellowColor, orangeColor, blueColor;
function getColors(white, red, green, yellow, orange, blue) {
    whiteColor = white;
    redColor = red;
    greenColor = green;
    yellowColor = yellow;
    orangeColor = orange;
    blueColor = blue;

}
function fullColor(shortColor) {
    switch (shortColor) {
        case "W": return whiteColor;
        case "R": return redColor;
        case "G": return greenColor;
        case "Y": return yellowColor;
        case "O": return orangeColor; 
        case "B": return blueColor;
    }
}
var stickerColors = {
    U:[
        "W", "W", "W", 
        "W", "W", "W", 
        "W", "W", "W"],
    R:[
        "R", "R", "R", 
        "R", "R", "R", 
        "R", "R", "R"],
    F:[
        "G", "G", "G", 
        "G", "G", "G", 
        "G", "G", "G"],
    D:[
        "Y", "Y", "Y", 
        "Y", "Y", "Y", 
        "Y", "Y", "Y"],
    L:[
        "O", "O", "O", 
        "O", "O", "O", 
        "O", "O", "O"],
    B:[
        "B", "B", "B", 
        "B", "B", "B", 
        "B", "B", "B"]
}


function doTurn(turn) {
    switch (turn) {
        case "U":  doUMove(1); break;
        case "U'": doUMove(3); break;
        case "U2": doUMove(2); break;
        case "R":  doRMove(1); break;
        case "R'": doRMove(3); break;
        case "R2": doRMove(2); break;
        case "F":  doFMove(1); break;
        case "F'": doFMove(3); break;
        case "F2": doFMove(2); break;
        case "D":  doDMove(1); break;
        case "D'": doDMove(3); break;
        case "D2": doDMove(2); break;
        case "L":  doLMove(1); break;
        case "L'": doLMove(3); break;
        case "L2": doLMove(2); break;
        case "B":  doBMove(1); break;
        case "B'": doBMove(3); break;
        case "B2": doBMove(2); break;
        case "":   break;
    }
}
function doUMove(x) {
    for (i = 0; i < x; i++) { // repeat U move x times for double turns or ccw turns
        var fSticker1 = stickerColors.F[0], fSticker2 = stickerColors.F[1], fSticker3 = stickerColors.F[2]
        
        // side swaps
        stickerColors.F[0] = stickerColors.R[0]
        stickerColors.F[1] = stickerColors.R[1]
        stickerColors.F[2] = stickerColors.R[2]
        stickerColors.R[0] = stickerColors.B[0]
        stickerColors.R[1] = stickerColors.B[1]
        stickerColors.R[2] = stickerColors.B[2]
        stickerColors.B[0] = stickerColors.L[0]
        stickerColors.B[1] = stickerColors.L[1]
        stickerColors.B[2] = stickerColors.L[2]
        stickerColors.L[0] = fSticker1
        stickerColors.L[1] = fSticker2
        stickerColors.L[2] = fSticker3
        // corners
        var faceStickerC = stickerColors.U[0]
        stickerColors.U[0] = stickerColors.U[6]
        stickerColors.U[6] = stickerColors.U[8]
        stickerColors.U[8] = stickerColors.U[2]
        stickerColors.U[2] = faceStickerC
        // edges 
        var faceStickerE = stickerColors.U[1]
        stickerColors.U[1] = stickerColors.U[3]
        stickerColors.U[3] = stickerColors.U[7]
        stickerColors.U[7] = stickerColors.U[5]
        stickerColors.U[5] = faceStickerE
    }
}

function doRMove(x) {
    for (i = 0; i < x; i++) {
        var uSticker1 = stickerColors.U[2], uSticker2 = stickerColors.U[5], uSticker3 = stickerColors.U[8];
        stickerColors.U[2] = stickerColors.F[2]
        stickerColors.U[5] = stickerColors.F[5]
        stickerColors.U[8] = stickerColors.F[8]
        stickerColors.F[2] = stickerColors.D[2]
        stickerColors.F[5] = stickerColors.D[5]
        stickerColors.F[8] = stickerColors.D[8]
        stickerColors.D[2] = stickerColors.B[6]
        stickerColors.D[5] = stickerColors.B[3]
        stickerColors.D[8] = stickerColors.B[0]
        stickerColors.B[0] = uSticker3
        stickerColors.B[3] = uSticker2
        stickerColors.B[6] = uSticker1
        // corners
        var faceStickerC = stickerColors.R[0]
        stickerColors.R[0] = stickerColors.R[6]
        stickerColors.R[6] = stickerColors.R[8]
        stickerColors.R[8] = stickerColors.R[2]
        stickerColors.R[2] = faceStickerC
        // edges 
        var faceStickerE = stickerColors.R[1]
        stickerColors.R[1] = stickerColors.R[3]
        stickerColors.R[3] = stickerColors.R[7]
        stickerColors.R[7] = stickerColors.R[5]
        stickerColors.R[5] = faceStickerE
    }
}
function doFMove(x) {
    for (i = 0; i < x; i++) {
        var uSticker1 = stickerColors.U[6], uSticker2 = stickerColors.U[7], uSticker3 = stickerColors.U[8];
        stickerColors.U[6] = stickerColors.L[8]
        stickerColors.U[7] = stickerColors.L[5]
        stickerColors.U[8] = stickerColors.L[2]
        stickerColors.L[2] = stickerColors.D[0]
        stickerColors.L[5] = stickerColors.D[1]
        stickerColors.L[8] = stickerColors.D[2]
        stickerColors.D[0] = stickerColors.R[6]
        stickerColors.D[1] = stickerColors.R[3]
        stickerColors.D[2] = stickerColors.R[0]
        stickerColors.R[0] = uSticker1
        stickerColors.R[3] = uSticker2
        stickerColors.R[6] = uSticker3
        // corners
        var faceStickerC = stickerColors.F[0]
        stickerColors.F[0] = stickerColors.F[6]
        stickerColors.F[6] = stickerColors.F[8]
        stickerColors.F[8] = stickerColors.F[2]
        stickerColors.F[2] = faceStickerC
        // edges 
        var faceStickerE = stickerColors.F[1]
        stickerColors.F[1] = stickerColors.F[3]
        stickerColors.F[3] = stickerColors.F[7]
        stickerColors.F[7] = stickerColors.F[5]
        stickerColors.F[5] = faceStickerE
    }
}
function doDMove(x) {
    for (i = 0; i < x; i++) {
        var fSticker1 = stickerColors.F[6], fSticker2 = stickerColors.F[7], fSticker3 = stickerColors.F[8]
        stickerColors.F[6] = stickerColors.L[6]
        stickerColors.F[7] = stickerColors.L[7]
        stickerColors.F[8] = stickerColors.L[8]
        stickerColors.L[6] = stickerColors.B[6]
        stickerColors.L[7] = stickerColors.B[7]
        stickerColors.L[8] = stickerColors.B[8]
        stickerColors.B[6] = stickerColors.R[6]
        stickerColors.B[7] = stickerColors.R[7]
        stickerColors.B[8] = stickerColors.R[8]
        stickerColors.R[6] = fSticker1
        stickerColors.R[7] = fSticker2
        stickerColors.R[8] = fSticker3
        // corners
        var faceStickerC = stickerColors.D[0]
        stickerColors.D[0] = stickerColors.D[6]
        stickerColors.D[6] = stickerColors.D[8]
        stickerColors.D[8] = stickerColors.D[2]
        stickerColors.D[2] = faceStickerC
        // edges 
        var faceStickerE = stickerColors.D[1]
        stickerColors.D[1] = stickerColors.D[3]
        stickerColors.D[3] = stickerColors.D[7]
        stickerColors.D[7] = stickerColors.D[5]
        stickerColors.D[5] = faceStickerE
    }
}
function doLMove(x) {
    for (i = 0; i < x; i++) {
        var fSticker1 = stickerColors.F[0], fSticker2 = stickerColors.F[3], fSticker3 = stickerColors.F[6]
        stickerColors.F[0] = stickerColors.U[0]
        stickerColors.F[3] = stickerColors.U[3]
        stickerColors.F[6] = stickerColors.U[6]
        stickerColors.U[0] = stickerColors.B[8]
        stickerColors.U[3] = stickerColors.B[5]
        stickerColors.U[6] = stickerColors.B[2]
        stickerColors.B[2] = stickerColors.D[6]
        stickerColors.B[5] = stickerColors.D[3]
        stickerColors.B[8] = stickerColors.D[0]
        stickerColors.D[0] = fSticker1
        stickerColors.D[3] = fSticker2
        stickerColors.D[6] = fSticker3
        // corners
        var faceStickerC = stickerColors.L[0]
        stickerColors.L[0] = stickerColors.L[6]
        stickerColors.L[6] = stickerColors.L[8]
        stickerColors.L[8] = stickerColors.L[2]
        stickerColors.L[2] = faceStickerC
        // edges 
        var faceStickerE = stickerColors.L[1]
        stickerColors.L[1] = stickerColors.L[3]
        stickerColors.L[3] = stickerColors.L[7]
        stickerColors.L[7] = stickerColors.L[5]
        stickerColors.L[5] = faceStickerE
    }
}
function doBMove(x) {
    for (i = 0; i < x; i++) {
        var uSticker1 = stickerColors.U[0], uSticker2 = stickerColors.U[1], uSticker3 = stickerColors.U[2];
        stickerColors.U[0] = stickerColors.R[2]
        stickerColors.U[1] = stickerColors.R[5]
        stickerColors.U[2] = stickerColors.R[8]
        stickerColors.R[2] = stickerColors.D[8]
        stickerColors.R[5] = stickerColors.D[7]
        stickerColors.R[8] = stickerColors.D[6]
        stickerColors.D[6] = stickerColors.L[0]
        stickerColors.D[7] = stickerColors.L[3]
        stickerColors.D[8] = stickerColors.L[6]
        stickerColors.L[0] = uSticker3
        stickerColors.L[3] = uSticker2
        stickerColors.L[6] = uSticker1
        // corners
        var faceStickerC = stickerColors.B[0]
        stickerColors.B[0] = stickerColors.B[6]
        stickerColors.B[6] = stickerColors.B[8]
        stickerColors.B[8] = stickerColors.B[2]
        stickerColors.B[2] = faceStickerC
        // edges 
        var faceStickerE = stickerColors.B[1]
        stickerColors.B[1] = stickerColors.B[3]
        stickerColors.B[3] = stickerColors.B[7]
        stickerColors.B[7] = stickerColors.B[5]
        stickerColors.B[5] = faceStickerE
    }
}
function resetStickers() {
    stickerColors = {
        U:[
            "W", "W", "W", 
            "W", "W", "W", 
            "W", "W", "W"],
        R:[
            "R", "R", "R", 
            "R", "R", "R", 
            "R", "R", "R"],
        F:[
            "G", "G", "G", 
            "G", "G", "G", 
            "G", "G", "G"],
        D:[
            "Y", "Y", "Y", 
            "Y", "Y", "Y", 
            "Y", "Y", "Y"],
        L:[
            "O", "O", "O", 
            "O", "O", "O", 
            "O", "O", "O"],
        B:[
            "B", "B", "B", 
            "B", "B", "B", 
            "B", "B", "B"]
    }
}
var ctx
function useCanvas(canvas){
    ctx = canvas.getContext("2d");
    
}
function drawSticker(color) {
    ctx.fillStyle = "black";
    ctx.fillRect(x - stickerOutline, y - stickerOutline, size + stickerOutline*2, size + stickerOutline*2);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}
var size = 30, stickerOutline = 1, halfACube = size*1.5+stickerOutline*2, betweenFaces = 5, spaceToAdd = size + stickerOutline*2;
var fullCube = halfACube*2 + stickerOutline*2 + betweenFaces*2;


                       
    // ctx.fillStyle = canvas.style.backgroundColor;
    // ctx.fillRect(startingPoint.x - stickerOutline - betweenFaces, startingPoint.y - stickerOutline - betweenFaces, halfACube*2+stickerOutline*2+betweenFaces*2, halfACube*2+stickerOutline*2+betweenFaces*2);
    
function drawFace(face) {
    switch (face) {
        case stickerColors.F: xFaceOffset = 0; yFaceOffset = 0; break;
        case stickerColors.R: xFaceOffset = fullCube; yFaceOffset = 0; break;
        case stickerColors.D: xFaceOffset = 0; yFaceOffset = fullCube; break;
        case stickerColors.L: xFaceOffset = -fullCube; yFaceOffset = 0; break;
        case stickerColors.U: xFaceOffset = 0; yFaceOffset = -fullCube; break;
        case stickerColors.B: xFaceOffset = 2*fullCube; yFaceOffset = 0; break;
    }
    var startingPoint = {
        x:canvas.width/2 - (halfACube * 2 + stickerOutline + betweenFaces),
        y:canvas.height/2 - halfACube
    }
    var index = 0
    for (y = startingPoint.y + yFaceOffset; y < (canvas.height/2 + halfACube) + yFaceOffset; y += size + stickerOutline*2) {
        for (x = startingPoint.x + xFaceOffset; x < (canvas.width/2 - stickerOutline - betweenFaces) + xFaceOffset; x += size + stickerOutline*2) {
            
            drawSticker(fullColor(face[index])); 
            index++;
            // make var index of which color of sticker from arrays
        }
    }
}



function drawAllFaces() {
    drawFace(stickerColors.F);
    drawFace(stickerColors.R);
    drawFace(stickerColors.U);
    drawFace(stickerColors.D);
    drawFace(stickerColors.L);
    drawFace(stickerColors.B);
}

// drawCircle(canvas.width/2, canvas.height/2, 5, "blue");
// drawLine(canvas.width/2,0,canvas.width/2,canvas.height);


function drawCircle(x, y, r, color="blue") {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fill()
}
function drawLine(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color || "black";
    ctx.stroke();
}
//export { canvas, drawSticker, doTurn, toColor }
