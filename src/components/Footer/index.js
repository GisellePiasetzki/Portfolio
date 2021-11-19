import './style.scss'

const Footer = () => {
    
    const generateDateString = () => {
        const creationYear = '2021';
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear: `${creationYear} - ${currentYear}`;
    }

    return(
    <footer id ="footer">
        <h3>Feito por Giselle Piasetzki. &copy;Copyright  {generateDateString()}</h3>
    </footer>
    )
}
export default Footer;