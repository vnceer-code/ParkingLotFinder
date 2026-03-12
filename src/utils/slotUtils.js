export const getAvailableSlots = (parkingId) => {

    const stored = JSON.parse(localStorage.getItem("parkingSlots")) || {}

    const slots = stored[parkingId] || []

    return slots.filter(
        (slot) => slot.status === "available"
    ).length

}