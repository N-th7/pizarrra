import React from "react";

const Modal=()=>{
    return(
        <div>
            <div id="id01" class="w3-modal">
                <div class="w3-modal-content">

                    <header class="w3-container w3-teal">
                    <span onclick="document.getElementById('id01').style.display='none'"
                    class="w3-button w3-display-topright">&times;</span>
                    <h2>Modal Header</h2>
                    </header>

                    <div class="w3-container">
                    <p>Some text..</p>
                    <p>Some text..</p>
                    </div>

                    <footer class="w3-container w3-teal">
                    <p>Modal Footer</p>
                    </footer>

                </div>
                </div>
        </div>
    );
}

export default Modal;