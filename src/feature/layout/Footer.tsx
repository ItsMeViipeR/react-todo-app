const now = new Date();
const year = now.getFullYear();

export const Footer = () => {
    return (
        <footer className="border-t border-b-accent mt-2">
            <div className="container flex flex-col py-2 m-auto">
                <h2 className="text-2xl font-bold text-center mb-2.5">Fait avec le ❤️ par ViipeR</h2>
                <p className="text-center">© {year === 2023 ? 2023 : `2023-${year}`} ViipeR. Tous droits réservés.</p>
            </div>
        </footer>
    )
}