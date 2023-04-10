function loadScript(url, callback) { var head = document.head; var script = document.createElement('script'); script.type = 'text/javascript'; script.src = url; script.onreadystatechange = callback; script.onload = callback; head.appendChild(script); }

var alert1 = function () { console.log("ready"); }; loadScript("https://html2canvas.hertzen.com/dist/html2canvas.js", alert1);

var writer = []; window.removeEventListener('scroll', scrollFunction); var active = false; var a = document.createElement("a"); document.body.appendChild(a); a.style = "display: none"; var time1; var writerSize = [];

function scrollFunction() {

    console.log("Delayed for 1 second.");
    if (!active) {
        active = true;
        for (let i = 0; i < 146; i++) {
            if (writer.includes(i)) { continue; }
            var canvas = document.getElementById("page" + i);
            if (canvas) {
                var dataURL = canvas.toDataURL("image/png");
                var newTab = window.open('about:blank', 'image from canvas');
                newTab.document.write("<img src='" + dataURL + "' alt='from canvas'/>");

                canvas.toBlob((blob) => {
                    let file = new Blob([blob], { type: "application/octet-stream" })
                    console.log(i);
                    //console.log(blob.size);
                    if (blob.size > 17000) {
                        writer.push(i);
                        console.log(blob.size);
                        console.log(blob.type);

                        let blobURL = URL.createObjectURL(file)
                        a.href = blobURL;
                        a.download = "page" + i + '.png';
                        a.click();

                    }
                })
            }
        }


        canvasClass = document.getElementsByClassName('page')
        console.log('canvasClass.length', canvasClass.length);
        for (let i4 = 0; i4 < canvasClass.length; i4++) {


            if (canvasClass[i4]) {
                let contents = canvasClass[i4].innerText;
                if (contents.length < 10) continue;
                //console.log('canvasClass[i4] contents',contents);
                console.log('canvasClass[i4] contents.length', contents.length);
            }
            div = canvasClass[i4];
            console.log('div', div);
            if (typeof html2canvas == "undefined") { 
                continue; 
            }
            html2canvas(div).then(canvas => {
                // var myImage = canvas.toDataURL();
                // downloadURI(myImage, "task_materials_"+blob.size+'.png';);

                if (canvas) {


                    canvas.toBlob((blob) => {
                        if (writerSize.includes(blob.size)) { return; }
                        if (blob.size > 17000) {
                            var dataURL = canvas.toDataURL("image/png");
                            var newTab = window.open('about:blank', 'image from canvas');
                            newTab.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
                            writerSize.push(blob.size);
                            console.log(blob.size);
                            console.log(blob.type);
                            let file = new Blob([blob], { type: "application/octet-stream" })
                            let blobURL = URL.createObjectURL(file)
                            a.href = blobURL;
                            a.download = "task_materials_" + blob.size + '.png';
                            a.click();

                        }
                    });
                }

            });
        }



        active = false;
    }


}



container1 = document.getElementById("viewerContainer")
try {
    scrollFunction();
} catch (error) {
    console.log(error);
}

let timerId2 = setInterval(
    () => {
        scrollFunction();
        container1.scroll(container1.scrollLeft, container1.scrollTop + 1000);
    }
    , 10000);

