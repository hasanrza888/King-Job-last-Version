export const calculateTimeDifference = (createdAt) => {
    const messageDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = Math.floor((currentDate - messageDate) / (1000 * 60)); // Difference in minutes

    if (timeDifference < 1) {
        return 'indi';
    } else if (timeDifference < 60) {
        return `${timeDifference} d`;
    } else if (timeDifference < 24 * 60) {
        const hours = Math.floor(timeDifference / 60);
        return `${hours} s`;
    } else if (timeDifference < 7 * 24 * 60) {
        const days = Math.floor(timeDifference / (24 * 60));
        return `${days} g`;
    } else if (timeDifference < 30 * 24 * 60) {
        const weeks = Math.floor(timeDifference / (7 * 24 * 60));
        return `${weeks} h`;
    } else if (timeDifference < 365 * 24 * 60) {
        const months = Math.floor(timeDifference / (30 * 24 * 60));
        return `${months} a`;
    } else {
        const years = Math.floor(timeDifference / (365 * 24 * 60));
        return `${years} i`;
    }
};
