function formatReleaseDate(releaseDate) {
    const date = new Date(releaseDate);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}


function formatVoteAverage(voteAverage) {
    return voteAverage.toFixed(1);
}

function formatRuntime(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
}

export { formatReleaseDate, formatVoteAverage, formatRuntime };