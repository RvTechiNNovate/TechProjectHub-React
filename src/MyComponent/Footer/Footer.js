import React from 'react'
import "./Footer.css"

export const Footer = () => {
    const date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var string = day + '-' + month + '-' + year;
    return (


        <div className="footer">
            <p>Copyright &copy; 2021 All right reserved </p><div>
                
            </div>
        </div>

    )
}
