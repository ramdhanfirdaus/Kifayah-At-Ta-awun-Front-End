import React from 'react'

const Footer = () => {
    return (
        <footer id="footer">
            <div class="container d-md-flex py-4">
                <div class="me-md-auto text-center text-md-start">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Ramdhan Firdaus Amelia</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed by r_adam29
                    </div>
                </div>
                <div class="social-links text-center text-md-end pt-3 pt-md-0">
                    <a href="https://github.com/ramdhanfirdaus" class="twitter"><i class="bx bxl-github"></i></a>
                    <a href="https://gitlab.com/ramdhanfirdaus" class="facebook"><i class="bx bxl-gitlab"></i></a>
                    <a href="https://www.instagram.com/r_adam29" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/ramdhan-firdaus-amelia/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer