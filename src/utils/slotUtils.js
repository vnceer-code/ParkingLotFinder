export const initializeSlots = (parkingLots) => {
    const stored = JSON.parse(localStorage.getItem("parkingSlots")) || {};

    parkingLots.forEach((lot) => {
        if (!stored[lot.id]) {
            const slots = [];
            for (let i = 1; i <= lot.totalslots; i++) {
                slots.push({
                    id: `${String.fromCharCode(65 + Math.floor((i - 1) / 100))}${(i % 100) || 100}`,
                    status: "available"
                });
            }
            stored[lot.id] = slots;
        }
    });

    localStorage.setItem("parkingSlots", JSON.stringify(stored));
};


export const getAvailableSlots = (parkingId) => {

    const stored = JSON.parse(localStorage.getItem("parkingSlots")) || {}

    const slots = stored[parkingId] || []

    return slots.filter(
        (slot) => slot.status === "available"
    ).length

}