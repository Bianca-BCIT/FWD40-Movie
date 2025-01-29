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

export { formatReleaseDate, formatVoteAverage };