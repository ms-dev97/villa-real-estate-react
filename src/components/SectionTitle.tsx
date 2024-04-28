function SectionTitle({label, title}: {label: string, title: string}) {
    return (
        <>
            <span className="block uppercase font-bold mb-3 text-[#ee626b]">
                | {label}
            </span>
            <span className="text-4xl font-bold leading-snug">
                {title}
            </span>
        </>
    );
}

export default SectionTitle;