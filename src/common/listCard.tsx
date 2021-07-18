import { Card } from "react-bootstrap";

export enum ListCardItemType {
    Text,
    Link,
    Info,
}
export interface ListCardItem {
    type: ListCardItemType;
    title?: string;
    text: string;
    url?: string;
}

export interface ListCardProps {
    title: string;
    img?: string;
    items: Array<ListCardItem>;
}

const ListCard = (props: ListCardProps) => {
    const { title, img, items } = props;
    return (
        <Card className="list-card">
            <Card.Body>
                <Card.Title as="h3">{title}</Card.Title>
                {img && (
                    <div className="service-image">
                        <Card.Img variant="top" src={require(`../img/${img}`).default} />
                    </div>
                )}
            </Card.Body>
            <Card.Body>
                <ul className="">
                    {items.map((item: ListCardItem, index: number) => {
                        switch (item.type) {
                            case ListCardItemType.Info:
                                return (
                                    <li key={index} className="info">
                                        <span className="item-title">{item.title}:</span>{" "}
                                        <span className="item-info">{item.text}</span>
                                    </li>
                                );
                            case ListCardItemType.Link:
                                return (
                                    <li key={index} className="link">
                                        <a href={item.url} target="_blank" rel="noreferrer">
                                            {item.text}
                                        </a>
                                    </li>
                                );
                            default:
                                return (
                                    <li key={index} className="text" dangerouslySetInnerHTML={{ __html: item.text }} />
                                );
                        }
                    })}
                </ul>
            </Card.Body>
        </Card>
    );
};

export default ListCard;
