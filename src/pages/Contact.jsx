import './Contact.css';

function Contact() {

    /* script API link */
    const scriptURL = "https://script.google.com/macros/s/AKfycbz5sV42xfPVhRdzsCfFsCHC16OkQPrNrWJLBse-GtCDevZEuGEFESXCFsAvK8bNV-irZQ/exec";

    function handleSumit(e) {
        const form = e.target;
        e.preventDefault();

        const formData = new URLSearchParams({
        email: form.email.value,
        title: form.title.value,
        message: form.message.value
        });

        fetch(scriptURL, {
            method:"POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body:formData.toString(),      
        })
        .then(res => res.text())
        .then(data=>{alert(data)})
        .catch(error => alert(error));

        form.reset();
    }


    return(
        <div id="contact">
            <div className="contact-Left">
                <p className="contact-title">Contact me</p>
                <p className="contact-sub">call to action</p>
                <div className="social-medias-container">
                    <a href="https://www.facebook.com/luong.trang.94043/" className="social-medias" id="Facebook"/>
                    <a href="https://www.instagram.com/cheesechesie/" className="social-medias" id="Ig"/>
                    <a href="https://www.linkedin.com/in/trang-luong-a4b773216/" className="social-medias" id="LinkIn"/>
                    <a href="https://github.com/HelloWorld1604" className="social-medias" id="GitHub"/>
                </div>
            </div>

            <div className="contact-Right">
                <form id="contact-form" onSubmit={e=>handleSumit(e)} acceptCharset="UTF-8">
                    <div id="form-headline">
                        <div>
                            <img id="stamp" src="/icons/Stamp.png" />
                        </div> 
                        
                        <div className="entries">
                            <div id="email-entry">
                                <p className="entry-titles">Email</p>
                                <input className="entry-boxes" id="emailInput" type="email" name="email" required/>    
                            </div>
                            
                            <div id="title-entry">
                                <p className="entry-titles">Title</p>
                                <input className="entry-boxes" id="titleInput" type="text" name="title" required/>   
                            </div>
                        </div>

                    </div>

                    <div><textarea id="messageInput" name="message" required/></div>
                    <button type="submit" id="form-summit-button">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;