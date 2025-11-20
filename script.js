console.log("Script is loaded");
document.getElementById('vibeBtn').addEventListener('click', function() {
    const vibes = ["Chill 😎", "Fiery 🔥", "Mysterious 🕶️", "Chaotic 🌪️"];
    const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
    document.getElementById('vibeResult').textContent = `Your vibe: ${randomVibe}`;
});
