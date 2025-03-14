class ShortLink extends HTMLElement {
    static get observedAttributes() {
        return ["url"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.wrapper = document.createElement("div")
        this.wrapper.setAttribute("class", "wrapper")

        this.a = document.createElement("a")
        this.wrapper.appendChild(this.a)

        this.imgCopy = this.wrapper.appendChild(document.createElement("img"));
        this.imgCopy.src = "/assets/icons/copy.svg";

        this.imgExternal = this.wrapper.appendChild(document.createElement("img"));
        this.imgExternal.src = "/assets/icons/external-link.svg";

        const style = document.createElement("style");
        style.textContent = `
            .wrapper {
                display: flex;
                gap:0.5rem;
            }
            a {
                padding-left: 1rem;
                color: #393232;
                text-decoration: underline;
            }
            img {
                width: 12pt;
                cursor: pointer;
            }
        `

        this.shadowRoot.append(style, this.wrapper);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "url") {
            this.a.href = newValue.split('/').pop();;
            this.a.innerText = newValue;
            this.imgCopy.onclick = () => navigator.clipboard.writeText(newValue);
            this.imgExternal.onclick = () => window.open(newValue)
        }
    }
}

export { ShortLink };