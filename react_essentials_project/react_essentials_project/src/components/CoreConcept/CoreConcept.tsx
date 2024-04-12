export function CoreConcept({ title, description, image }: { title: string, description: string, image: string }) {
    return (
        <li>
            <img src={image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}