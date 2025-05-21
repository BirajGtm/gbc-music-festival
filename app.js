console.log("From APP.JS")

const map = L.map("map").setView(
        [27.695000978800444, 85.31483972431158],
        16
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      L.marker([27.695000978800444, 85.31483972431158])
        .addTo(map)
        .bindPopup(
          '<ion-icon name="navigate-circle-outline"></ion-icon>' +
            "Music Festival"
        )
        .openPopup();