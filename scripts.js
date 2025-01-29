const properties = [
  {
    id: 1,
    title: "דירת 3 חדרים חדשה מקבלן",
    address: "רח' חסדאי",
    price: "2,300,000 ₪",
    size: "8",
    rooms: "3",
    floor: "",
    description: 'מרפסת שמש 8 מ"ר + מעלית חניה וממ"ד',
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "דירת 3.5 חדרים להשכרה",
    address: "רח' דב הוז",
    price: "4,000 ₪",
    size: "100",
    rooms: "3.5",
    floor: "",
    description: "2 מזגנים, כניסה מיידית!",
    image:
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "בית קרקע 4 חדרים",
    address: "בתל גיבורים",
    price: "3,800,000 ₪",
    size: "115",
    rooms: "4",
    floor: "קרקע",
    description: 'בית קרקע, 115 מ"ר בנוי + 230 מ"ר חצר, משופצת',
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "דירת 3 חדרים מפוארת",
    address: " בעל שם טוב 34, חולון",
    price: "4500 ₪",
    size: "88",
    rooms: "3",
    floor: "2 מתוך 3",
    description: "דירה מרווחת ומשופצת, מטבח חדש, מרפסת שמש, חניה",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "חדר להשכרה",
    address: "רח' המעפילים",
    price: "1,600 ₪",
    size: "",
    rooms: "1",
    floor: "",
    description: "חדר כולל כל ההוצאות!!",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    title: "דירת 3 חדרים למכירה",
    address: "רח' הפרדס",
    price: "1,950,000 ₪",
    size: "90",
    rooms: "3",
    floor: "",
    description: "מרפסת ענקית - משופצת, כניסה מיידית!",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    title: "חדר סטודיו להשכרה",
    address: "בתל גיבורים",
    price: "2,800 ₪",
    size: "",
    rooms: "1",
    floor: "",
    description: "חדר סטודיו כולל כל ההוצאות ומשופץ, כניסה מיידית",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    title: "חנות/מחסן להשכרה",
    address: "רח' דב הוז",
    price: "3,700 ₪",
    size: "30",
    rooms: "",
    floor: "",
    description: "מסודרת, כניסה מיידית",
    image:
      "https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    title: "דירת 3 חדרים להשכרה",
    address: "רח' קפאח",
    price: "4,800 ₪",
    size: "70",
    rooms: "3",
    floor: "",
    description: "כניסה מיידית",
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    title: "יחידת דיור קרקע להשכרה",
    address: "רח' דובנוב",
    price: "3,000 ₪",
    size: "",
    rooms: "",
    floor: "קרקע",
    description:
      "יחידת דיור קרקע חמודה, מרוהטת כולל אינטרנט וכבלים, כניסה מיידית",
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    title: "דירת גג - 4 חדרים",
    address: "רח' הפורצים",
    price: "2,400,000 ₪",
    size: "120",
    rooms: "4",
    floor: "2",
    description: "קומה 2, חניה גדולה בטאבו, 3 כיווני אוויר",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 12,
    title: "דירת 3.5 חדרים",
    address: "שכ' תל גיבורים",
    price: "1,900,000 ₪",
    size: "",
    rooms: "3.5",
    floor: "",
    description: "חזית + חצר קדמית ואחורית",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 13,
    title: "בעל/ת עסק?",
    address: "",
    price: "",
    size: "",
    rooms: "",
    floor: "",
    description:
      "נשמח לעזור לך להשכיר את הנכס בהצעה משתלמת במיוחד! פרטים במשרד",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=60",
  },
];

let currentPage = 0;
const propertiesPerPage = 4;

// הגדרת משתנה גלובלי לטיימר
let timeLeft = 20;

function displayProperties() {
  const container = document.getElementById("properties-container");
  container.innerHTML = ""; // ניקוי התצוגה הקיימת

  const startIndex = currentPage * propertiesPerPage;
  const endIndex = Math.min(startIndex + propertiesPerPage, properties.length);
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  for (let i = startIndex; i < endIndex; i++) {
    const property = properties[i];
    const propertyNumber = i + 1;

    // בדיקה משופרת אם הנכס להשכרה או למכירה לפי המחיר
    const isRental =
      property.price.includes("₪") &&
      property.price.includes("₪") &&
      property.price.match(/^\d{1,4}(,\d{3})?(?!\d) ₪/);
    const propertyTag = isRental
      ? '<div class="property-tag tag-rent">להשכרה</div>'
      : '<div class="property-tag tag-sale">למכירה</div>';

    const propertyCard = `
            <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div class="card property-card">
                    ${propertyTag}
                    <div class="property-number">${propertyNumber}/${
      properties.length
    }</div>
                    <img src="${property.image}" class="card-img-top" alt="${
      property.title
    }">
                    <div class="card-body">
                        <h5 class="card-title">🏠 ${property.title}</h5>
                        <div class="property-info-grid">
                            <div class="info-row">
                                <div class="info-item">📍 <strong>כתובת:</strong> ${
                                  property.address
                                }</div>
                                <div class="info-item price">💰 ${
                                  property.price
                                }</div>
                            </div>
                            <div class="info-row">
                                <div class="info-item">📐 <strong>שטח:</strong> ${
                                  property.size
                                    ? property.size + ' מ"ר'
                                    : "לא צוין"
                                }</div>
                                <div class="info-item">🚪 <strong>חדרים:</strong> ${
                                  property.rooms || "לא צוין"
                                }</div>
                            </div>
                            <div class="info-row last-row">
                                <div class="info-item">⬆️ <strong>קומה:</strong> ${
                                  property.floor || "לא צוין"
                                }</div>
                            </div>
                        </div>
                        <p class="description">📝 ${property.description}</p>
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += propertyCard;
  }
}

function updateTimer(timeLeft) {
  const timerElement = document.getElementById("timer");
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function navigateProperties(direction) {
  // איפוס הטיימר
  timeLeft = 20;

  // חישוב העמוד הבא
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  currentPage = (currentPage + direction + totalPages) % totalPages;

  // הצגת הנכסים החדשים
  displayProperties();
}

function startRotation() {
  displayProperties();

  // עדכון ראשוני של הטיימר
  updateTimer(timeLeft);

  setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      timeLeft = 20;
      navigateProperties(1);
    }
    updateTimer(timeLeft);
  }, 1000);
}

// הפעלה בטעינת הדף
document.addEventListener("DOMContentLoaded", startRotation);
