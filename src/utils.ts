export const getDurationString = (minutes) => {
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

export const getShortDescription = (string) => {
    if (string.length > 200) {
        string = string.split("").slice(0, 199).join("");
        return string.trim() + "...";
    }
    return string;
};

export const handleLikeClick = (event) => {
    event.stopPropagation();
    alert("Нет бэка чтобы изменить лайк");
};