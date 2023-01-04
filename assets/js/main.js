// ===== SEITEN zum Thema ===
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp



let gallery = document.getElementById("gallery");

/* gallery.innerHTML += `<figure><img src="https://picsum.photos/300/300" alt="pic"><figcaption>Fig.1</figcaption></figure>` 
+ `<figure><img src="https://picsum.photos/300/300" alt="pic"><figcaption>Fig.2</figcaption></figure>` 
+ `<figure><img src="https://picsum.photos/300/300" alt="pic"><figcaption>Fig.3</figcaption></figure>`;

 */
console.log(gallery);

gallery.style.display = "flex";
gallery.style.justifyContent = "space-evenly";

gallery.innerHTML += '<figure><img src="https://picsum.photos/300/300" alt="pic"><figcaption>Fig.1</figcaption></figure>' 
+ '<figure><img src="https://picsum.photos/300/300" alt="pic"><figcaption>Fig.2</figcaption></figure>' 
+ '<figure><img src="https://picsum.photos/300/300" alt="pic"><figcaption>Fig.3</figcaption></figure>';


// ==== if inverted commas twice - dann einmal '' und einmal "" ====