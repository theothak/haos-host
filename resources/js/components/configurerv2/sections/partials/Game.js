import React from 'react';
import tailwind from "../../tailwind";

const Card = tailwind.div(() => `
    trans relative rounded hover:shadow-md overflow-hidden
`);

const Image = tailwind.img(() => `
    z-0 trans cursor-pointer shadow-lg
`);

export default function Game({id, game, selected, onClick}) {
    const scaled = {transform: 'scale(1.05)'};
    const muted = {transform: '', filter: 'blur(1px) grayscale(100%) brightness(60%)'};

    const {name, cover} = game;

    function getContainerStyle() {
        return selected ? scaled : {};
    }

    function getImageStyle() {
        return selected === null || selected ? {} : muted;
    }

    return <Card
        $onClick={onClick.bind(this, id)}
        $style={getContainerStyle()}
    >
        <Image
            $src={cover}
            $style={getImageStyle()}
            $alt={name}
        />
    </Card>
}
