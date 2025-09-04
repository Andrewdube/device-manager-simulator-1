
const devices = {
    "Display adapters": [
        {
            "name": "Intel Iris Xe Graphics",
            "status": "This device is working properly.",
            "driver": "Intel 31.0.101.3790"
        }
    ],
    "Network adapters": [
        {
            "name": "Intel Wi-Fi 6E AX211",
            "status": "This device is working properly.",
            "driver": "Intel 22.230.0.8"
        }
    ],
    "Sound, video and game controllers": [
        {
            "name": "Realtek Audio",
            "status": "Code 10: This device cannot start.",
            "driver": "Realtek 6.0.9235.1"
        }
    ],
    "Batteries": [
        {
            "name": "Lenovo ACPI-Compliant Control Method Battery",
            "status": "This device is working properly.",
            "driver": "Microsoft 10.0.19041.1"
        }
    ],
    "Storage controllers": [
        {
            "name": "Intel RST Controller",
            "status": "This device is working properly.",
            "driver": "Intel 19.5.0.1037"
        }
    ],
    "USB controllers": [
        {
            "name": "Intel USB 3.1 eXtensible Host Controller",
            "status": "This device is working properly.",
            "driver": "Intel 10.1.1.45"
        }
    ],
    "System devices": [
        {
            "name": "Intel Management Engine Interface",
            "status": "This device is working properly.",
            "driver": "Intel 2040.100.0.1029"
        }
    ],
    "Keyboards": [
        {
            "name": "Standard PS/2 Keyboard",
            "status": "This device is working properly.",
            "driver": "Microsoft 10.0.19041.1"
        }
    ],
    "Mice and other pointing devices": [
        {
            "name": "Synaptics Pointing Device",
            "status": "This device is working properly.",
            "driver": "Synaptics 19.5.10.201"
        }
    ]
};

const deviceList = document.getElementById("deviceList");
const properties = document.getElementById("properties");

for (const category in devices) {
    const categoryItem = document.createElement("li");
    categoryItem.textContent = category;
    const subList = document.createElement("ul");

    devices[category].forEach(device => {
        const deviceItem = document.createElement("li");
        deviceItem.textContent = device.name;
        deviceItem.onclick = () => {
            properties.innerHTML = `
                <p><strong>Name:</strong> ${device.name}</p>
                <p><strong>Status:</strong> ${device.status}</p>
                <p><strong>Driver:</strong> ${device.driver}</p>
            `;
        };
        subList.appendChild(deviceItem);
    });

    categoryItem.appendChild(subList);
    deviceList.appendChild(categoryItem);
}
