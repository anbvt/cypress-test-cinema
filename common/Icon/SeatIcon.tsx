const ItemDefault = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="45" viewBox="0 0 57 48" fill="none">
            <rect x="1.5" y="1.5" width="53.6018" height="32.0762" rx="15.5" fill="#A2A2A2" stroke-width="3" />
            <rect x="13.6621" y="39.5404" width="29.2771" height="6.88063" rx="3.44031" fill="#A2A2A2" stroke-width="3" />
        </svg>
    )
};

const ItemChoose = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="45" viewBox="0 0 57 48" fill="none">
            <rect width="56.6018" height="35.0762" rx="17" fill="#008143" />
            <rect x="12.1624" y="38.0404" width="32.2771" height="9.88063" rx="4.94031" fill="#008143" />
        </svg>
    );
};

const ItemHasBooked = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="45" viewBox="0 0 57 48" fill="none">
            <rect width="56.6018" height="35.0762" rx="17" fill="#AA1E21" />
            <rect x="12.1624" y="38.0404" width="32.2771" height="9.88063" rx="4.94031" fill="#AA1E21" />
            <path d="M38 8H32.5L29 15L25 8H19.5L25 18L19 27.5H25L29 21L32.5 27.5H38L32.5 17.5L38 8Z" fill="#1D212B" />
        </svg>
    );
};

const ItemCoupleChoose = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="45" viewBox="0 0 91 48" fill="none">
            <rect width="91" height="35" rx="17" fill="#008143" />
            <rect x="12.1624" y="38.0404" width="32.2771" height="9.88063" rx="4.94031" fill="#008143" />
            <rect x="45" y="38" width="32.2771" height="9.88063" rx="4.94031" fill="#008143" />
        </svg>
    )
}

const ItemCoupleHasBooked = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="45" viewBox="0 0 91 48" fill="none">
            <rect width="91" height="35" rx="17" fill="#AA1E21" />
            <rect x="12.1624" y="38.0404" width="32.2771" height="9.88063" rx="4.94031" fill="#AA1E21" />
            <rect x="45" y="38" width="32.2771" height="9.88063" rx="4.94031" fill="#AA1E21" />
            <path d="M54 9H48.5L45 16L41 9H35.5L41 19L35 28.5H41L45 22L48.5 28.5H54L48.5 18.5L54 9Z" fill="#1D212B" />
        </svg>
    );
}

const ItemCoupleDefault = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="45" viewBox="0 0 91 48" fill="none">
            <rect x="1.5" y="1.5" width="88" height="32" rx="15.5" fill="#A2A2A2" stroke-width="3" />
            <rect x="13.6624" y="39.5404" width="29.2771" height="6.88063" rx="3.44031" fill="#A2A2A2" stroke-width="3" />
            <rect x="46.5" y="39.5" width="29.2771" height="6.88063" rx="3.44031" fill="#A2A2A2" stroke-width="3" />
        </svg>
    )
}


export default {
    ItemChoose,
    ItemDefault,
    ItemHasBooked,
    ItemCoupleChoose,
    ItemCoupleHasBooked,
    ItemCoupleDefault
}