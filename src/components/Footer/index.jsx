function Footer({texto = '© 2024 FIAP, Inc'}) {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 texto-muted">
                    {texto}
                </span>
            </div>
        </footer>
    )
}

export default Footer;