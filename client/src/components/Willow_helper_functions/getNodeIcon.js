const getNodeIcon = (type) => {
    switch (type) {
        case 'EXPLORATIVE':         return 'M241.66,50.65,251.58,43a1.76,1.76,0,0,1,2.46.31l45.59,58.82a1.74,1.74,0,0,1-.31,2.46l-9.92,7.69a1.75,1.75,0,0,1-2.45-.31l-45.6-58.82A1.76,1.76,0,0,1,241.66,50.65ZM198.6,96.13l36,46.47a1.74,1.74,0,0,0,2.46.31L275.62,113a1.74,1.74,0,0,0,.31-2.46l-36-46.47a1.74,1.74,0,0,0-2.46-.31L198.91,93.67A1.76,1.76,0,0,0,198.6,96.13ZM79.86,198.88,105.52,232a1.74,1.74,0,0,0,2.45.32l115.41-89.47a1.74,1.74,0,0,0,.31-2.46L198,107.27a1.75,1.75,0,0,0-2.45-.31L80.17,196.43A1.73,1.73,0,0,0,79.86,198.88ZM60.47,219.42l20.32,26.22a1.76,1.76,0,0,0,2.46.31l15.9-12.33a1.74,1.74,0,0,0,.31-2.46L79.14,205a1.75,1.75,0,0,0-2.45-.31L60.79,217A1.74,1.74,0,0,0,60.47,219.42ZM43.55,237.94l15.09,19.47a1.76,1.76,0,0,0,2.46.31l13.75-10.67a1.74,1.74,0,0,0,.32-2.45L60.08,225.13a1.76,1.76,0,0,0-2.46-.31L43.86,235.48A1.76,1.76,0,0,0,43.55,237.94ZM20.37,250.52l20.32,26.21a1.75,1.75,0,0,0,2.45.31l8-6.17a1.73,1.73,0,0,0,.31-2.45L47.18,263,53,258.5a1.76,1.76,0,0,0,.31-2.46L43.53,243.5a1.74,1.74,0,0,0-2.45-.32l-5.77,4.47-4.22-5.44a1.75,1.75,0,0,0-2.46-.32l-7.95,6.17A1.74,1.74,0,0,0,20.37,250.52Z'; // EXPLORATIVE
        case 'START_ACTION':        return 'M20,275.46V44.54L300,160Z'; // START ACTION
        case 'NEXT_ACTION':         return 'M94.1,244.9V75.1L300,160Zm-74.1,0H56.61V75.1H20Z'; // NEXT ACTION
        case 'ONE_TIME_OBJECTIVE':  return 'M300,300H20V20H300ZM33.72,286.28H286.28V33.72H33.72ZM160,117.73A42.27,42.27,0,1,0,202.27,160,42.28,42.28,0,0,0,160,117.73Z'; // ONE TIME OBJECTIVE
        default:                    return 'M245.09,184l-35.15-35.15L224.53,145a68.14,68.14,0,1,0-23.25,67.76,9.44,9.44,0,0,1,12,14.58,87,87,0,1,1,29.53-87.23L258,136ZM300,20V300H20V20ZM33.72,286.28H286.28V33.72H33.72Z'; // RECURRING OBJECTIVE
    }
};

module.exports.getNodeIcon = getNodeIcon;