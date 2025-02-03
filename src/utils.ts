export const getDurationString = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    if (hours === 0) {
        return `${minutes}m`;
    } else {
        const minutesLeft = minutes % 60;
        return minutesLeft !== 0
        ? `${hours}h ${minutesLeft}m`
        :  `${hours}h`;
    }
};

export const getShortDescription = (description: string) => {
    if (description.length > 200) {
        description = description.split("").slice(0, 199).join("");
        return description.trim() + "...";
    }
    return description;
};

export const handleLikeClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    alert("Нет бэка чтобы изменить лайк");
};