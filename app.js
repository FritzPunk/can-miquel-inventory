// ===== Can Miquel Inventory Management System =====
// ===== WITH FIREBASE REAL-TIME DATABASE =====

// ===== Firebase Configuration =====
const firebaseConfig = {
    apiKey: "AIzaSyCSKhRmynciH_8Vr4gDPg4kXU-FoQqDHKo",
    authDomain: "can-miquel-inventory.firebaseapp.com",
    databaseURL: "https://can-miquel-inventory-default-rtdb.firebaseio.com",
    projectId: "can-miquel-inventory",
    storageBucket: "can-miquel-inventory.firebasestorage.app",
    messagingSenderId: "912925324878",
    appId: "1:912925324878:web:a9ce48b224e67688c4351f"
};

// Initialize Firebase
let database = null;
let firebaseReady = false;

// ===== Translations =====
const translations = {
    en: {
        export: 'Export',
        import: 'Import',
        families: 'Families',
        items: 'items',
        item: 'item',
        selectFamily: 'Select a Family',
        addItem: 'Add Item',
        searchPlaceholder: 'Search items...',
        itemName: 'Item Name',
        quantity: 'Quantity',
        unit: 'Unit',
        minStock: 'Min. Stock',
        weekly: 'Mermax',
        weeklyWaste: 'This Week Waste',
        realStock: 'Real Stock',
        applyMermax: 'Apply Waste',
        status: 'Status',
        actions: 'Actions',
        inStock: 'In Stock',
        lowStock: 'Low Stock',
        outOfStock: 'Out of Stock',
        emptyState: 'No items yet. Select a family and add your first item!',
        lastSaved: 'Last saved',
        never: 'Never',
        addFamily: 'Add Family',
        editFamily: 'Edit Family',
        familyName: 'Family Name',
        familyNamePlaceholder: 'e.g., Beverages, Meats, Vegetables...',
        iconEmoji: 'Icon (emoji)',
        saveFamily: 'Save Family',
        editItem: 'Edit Item',
        itemNameLabel: 'Item Name',
        itemNamePlaceholder: 'e.g., Olive Oil, Chicken Breast...',
        minStockLabel: 'Minimum Stock (alert threshold)',
        weeklyLabel: 'This Week Waste (Mermax)',
        weeklyLabelHelp: 'Amount to deduct from inventory',
        notesLabel: 'Notes (optional)',
        notesPlaceholder: 'Any additional notes...',
        saveItem: 'Save Item',
        unitUnits: 'Units',
        unitKg: 'Kilograms (kg)',
        unitG: 'Grams (g)',
        unitL: 'Liters (L)',
        unitMl: 'Milliliters (mL)',
        unitBottles: 'Bottles',
        unitBoxes: 'Boxes',
        unitPacks: 'Packs',
        confirmDelete: 'Confirm Delete',
        deleteConfirmItem: 'Are you sure you want to delete this item?',
        deleteConfirmFamily: 'Are you sure you want to delete',
        deleteConfirmFamilyItems: 'This will also delete',
        deleteConfirmFamilyItemsIn: 'in this family.',
        cancel: 'Cancel',
        delete: 'Delete',
        enterFamilyName: 'Please enter a family name.',
        enterItemName: 'Please enter an item name.',
        importConfirm: 'This will replace your current inventory with:',
        importFamilies: 'families',
        importItems: 'items',
        importContinue: 'Continue?',
        importSuccess: 'Data imported successfully!',
        importError: 'Error importing data. Please make sure the file is a valid inventory export.',
        defaultBeverages: 'Beverages',
        defaultMeats: 'Meats',
        defaultVegetables: 'Vegetables',
        defaultDairy: 'Dairy',
        defaultPantry: 'Pantry',
        defaultSeafood: 'Seafood',
        connecting: 'Connecting...',
        connected: 'Connected',
        offline: 'Offline Mode',
        mermaxByFamily: 'Weekly Waste by Family (Mermax)',
        noMermaxData: 'No waste data yet. Add mermax values to items.',
        
        // Reservations
        inventory: 'Inventory',
        reservations: 'Reservations',
        addReservation: 'Add Reservation',
        editReservation: 'Edit Reservation',
        saveReservation: 'Save Reservation',
        customerName: 'Customer Name',
        date: 'Date',
        time: 'Time',
        numberOfPeople: 'Number of People',
        eventType: 'Event Type',
        phone: 'Phone Number',
        noEvent: 'Regular Dining',
        birthday: 'Birthday',
        anniversary: 'Anniversary',
        business: 'Business Meal',
        otherEvent: 'Other Event',
        reservationNotesPlaceholder: 'Special requests, allergies, etc...',
        emptyReservations: 'No reservations yet. Add your first reservation!',
        people: 'people',
        person: 'person',
        
        // Cierre del Día
        cierre: 'Day Close',
        cierreDelDia: 'Day Close - Cash Reconciliation',
        addCierre: 'Add Close',
        saveCierre: 'Save Close',
        cierreZ: 'Z-CLOSE (System Report)',
        cierreZCash: 'Cash Z-Close ($)',
        cierreZCard: 'Card Z-Close ($)',
        realMoney: 'Real Money (Counted)',
        realCash: 'Real Cash ($)',
        realCard: 'Real Card ($)',
        totalZClose: 'Total Z-Close',
        totalReal: 'Total Real',
        difference: 'Difference',
        correct: 'CORRECT',
        review: 'REVIEW',
        history: 'History',
        emptyCierre: 'No closes yet. Add your first day close!',
        cierreNotesPlaceholder: 'Additional observations...',
        cashDiff: 'Cash Diff',
        cardDiff: 'Card Diff',
        exportCierre: 'Export to Excel',
        noDataExport: 'No data to export',
        exportSuccess: 'Excel file exported successfully!',
        enterDate: 'Please enter a date',
        enterAtLeastOneValue: 'Please enter at least one value',
        closeSavedFor: 'Close saved for',
        fillAllFields: 'Please fill in all required fields',
        negativeValue: 'Quantities cannot be negative',
        invalidNumber: 'Please enter valid numbers',
        storageFull: 'Storage quota exceeded. Please export your data and clear some items.',
        dataLarge: 'Warning: Inventory data is very large. Consider exporting a backup.',
        
        // Albaranes
        albaranes: 'Albaranes',
        addAlbaran: 'Add Albaran',
        editAlbaran: 'Edit Albaran',
        saveAlbaran: 'Save Albaran',
        companyName: 'Company Name',
        companyNamePlaceholder: 'e.g., Supplier ABC, Distributor XYZ...',
        albaranNumber: 'Albaran Number',
        albaranNumberPlaceholder: 'e.g., ALB-2024-001',
        albaranDate: 'Date',
        amount: 'Amount',
        amountPlaceholder: '0.00',
        emptyAlbaranes: 'No albaranes yet. Add your first albaran!',
        deleteConfirmAlbaran: 'Are you sure you want to delete this albaran?',
        spendingByCompany: 'Spending by Company',
        noCompanyData: 'No spending data yet. Add albaranes to see company spending.',
        totalSpent: 'Total Spent',
        albaranesCount: 'Albaranes',
        spendingOverTime: 'Spending Over Time',
        fromDate: 'From Date',
        toDate: 'To Date',
        resetDates: 'Reset',
        total: 'Total',
        year: 'Year',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        noSpendingData: 'No spending data for the selected period.',
        consumption: 'Consumption',
        scanAlbaran: 'Scan Albaran',
        scannerInstructions: 'Position the barcode/QR code within the frame',
        scannerReady: 'Ready to scan...',
        stopScanner: 'Stop Scanner',
        scanSuccess: 'Albaran scanned successfully!',
        scanError: 'Error scanning. Please try again.',
        noCamera: 'Camera access denied or not available.',
        parsingData: 'Parsing scanned data...'
    },
    es: {
        export: 'Exportar',
        import: 'Importar',
        families: 'Familias',
        items: 'artículos',
        item: 'artículo',
        selectFamily: 'Selecciona una Familia',
        addItem: 'Añadir Artículo',
        searchPlaceholder: 'Buscar artículos...',
        itemName: 'Nombre',
        quantity: 'Cantidad',
        unit: 'Unidad',
        minStock: 'Stock Mín.',
        weekly: 'Mermax',
        weeklyWaste: 'Desperdicio Semanal',
        realStock: 'Stock Real',
        applyMermax: 'Aplicar Desperdicio',
        status: 'Estado',
        actions: 'Acciones',
        inStock: 'En Stock',
        lowStock: 'Stock Bajo',
        outOfStock: 'Agotado',
        emptyState: 'Sin artículos. ¡Selecciona una familia y añade tu primer artículo!',
        lastSaved: 'Guardado',
        never: 'Nunca',
        addFamily: 'Añadir Familia',
        editFamily: 'Editar Familia',
        familyName: 'Nombre de Familia',
        familyNamePlaceholder: 'ej., Bebidas, Carnes, Verduras...',
        iconEmoji: 'Icono (emoji)',
        saveFamily: 'Guardar Familia',
        editItem: 'Editar Artículo',
        itemNameLabel: 'Nombre del Artículo',
        itemNamePlaceholder: 'ej., Aceite de Oliva, Pechuga de Pollo...',
        minStockLabel: 'Stock Mínimo (umbral de alerta)',
        weeklyLabel: 'Desperdicio Esta Semana (Mermax)',
        weeklyLabelHelp: 'Cantidad a deducir del inventario',
        notesLabel: 'Notas (opcional)',
        notesPlaceholder: 'Notas adicionales...',
        saveItem: 'Guardar Artículo',
        unitUnits: 'Unidades',
        unitKg: 'Kilogramos (kg)',
        unitG: 'Gramos (g)',
        unitL: 'Litros (L)',
        unitMl: 'Mililitros (mL)',
        unitBottles: 'Botellas',
        unitBoxes: 'Cajas',
        unitPacks: 'Paquetes',
        confirmDelete: 'Confirmar Eliminación',
        deleteConfirmItem: '¿Estás seguro de que quieres eliminar este artículo?',
        deleteConfirmFamily: '¿Estás seguro de que quieres eliminar',
        deleteConfirmFamilyItems: 'Esto también eliminará',
        deleteConfirmFamilyItemsIn: 'en esta familia.',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        enterFamilyName: 'Por favor, introduce un nombre de familia.',
        enterItemName: 'Por favor, introduce un nombre de artículo.',
        importConfirm: 'Esto reemplazará tu inventario actual con:',
        importFamilies: 'familias',
        importItems: 'artículos',
        importContinue: '¿Continuar?',
        importSuccess: '¡Datos importados correctamente!',
        importError: 'Error al importar datos. Asegúrate de que el archivo es una exportación válida.',
        defaultBeverages: 'Bebidas',
        defaultMeats: 'Carnes',
        defaultVegetables: 'Verduras',
        defaultDairy: 'Lácteos',
        defaultPantry: 'Despensa',
        defaultSeafood: 'Mariscos',
        connecting: 'Conectando...',
        connected: 'Conectado',
        offline: 'Modo Offline',
        mermaxByFamily: 'Desperdicio Semanal por Familia (Mermax)',
        noMermaxData: 'Sin datos de desperdicio aún. Añade valores mermax a los artículos.',
        
        // Reservations
        inventory: 'Inventario',
        reservations: 'Reservas',
        addReservation: 'Añadir Reserva',
        editReservation: 'Editar Reserva',
        saveReservation: 'Guardar Reserva',
        customerName: 'Nombre del Cliente',
        date: 'Fecha',
        time: 'Hora',
        numberOfPeople: 'Número de Personas',
        eventType: 'Tipo de Evento',
        phone: 'Teléfono',
        noEvent: 'Cena Regular',
        birthday: 'Cumpleaños',
        anniversary: 'Aniversario',
        business: 'Comida de Negocios',
        otherEvent: 'Otro Evento',
        reservationNotesPlaceholder: 'Peticiones especiales, alergias, etc...',
        emptyReservations: '¡Sin reservas aún. Añade tu primera reserva!',
        people: 'personas',
        person: 'persona',
        
        // Cierre del Día
        cierre: 'Cierre',
        cierreDelDia: 'Cierre del Día - Reconciliación de Caja',
        addCierre: 'Añadir Cierre',
        saveCierre: 'Guardar Cierre',
        cierreZ: 'CIERRE DE Z (Del Sistema)',
        cierreZCash: 'CIERRE Z - Efectivo ($)',
        cierreZCard: 'CIERRE Z - Visa/Tarjetas ($)',
        realMoney: 'Dinero Real (Contado)',
        realCash: 'Efectivo Real ($)',
        realCard: 'Visa/Tarjetas Real ($)',
        totalZClose: 'Total Cierre Z',
        totalReal: 'Total Real',
        difference: 'Diferencia',
        correct: 'CORRECTO',
        review: 'REVISAR',
        history: 'Historial',
        emptyCierre: '¡Sin cierres aún. Añade tu primer cierre del día!',
        cierreNotesPlaceholder: 'Observaciones adicionales...',
        cashDiff: 'Dif. Efectivo',
        cardDiff: 'Dif. Tarjetas',
        exportCierre: 'Exportar a Excel',
        noDataExport: 'No hay datos para exportar',
        exportSuccess: '¡Archivo Excel exportado correctamente!',
        enterDate: 'Por favor, introduce una fecha',
        enterAtLeastOneValue: 'Por favor, introduce al menos un valor',
        closeSavedFor: 'Cierre guardado para',
        fillAllFields: 'Por favor, completa todos los campos requeridos',
        negativeValue: 'Las cantidades no pueden ser negativas',
        invalidNumber: 'Por favor, introduce números válidos',
        storageFull: 'Cuota de almacenamiento excedida. Por favor, exporta tus datos y elimina algunos artículos.',
        dataLarge: 'Advertencia: Los datos del inventario son muy grandes. Considera exportar una copia de seguridad.',
        
        // Albaranes
        albaranes: 'Albaranes',
        addAlbaran: 'Añadir Albarán',
        editAlbaran: 'Editar Albarán',
        saveAlbaran: 'Guardar Albarán',
        companyName: 'Nombre de la Empresa',
        companyNamePlaceholder: 'ej., Proveedor ABC, Distribuidor XYZ...',
        albaranNumber: 'Número de Albarán',
        albaranNumberPlaceholder: 'ej., ALB-2024-001',
        albaranDate: 'Fecha',
        amount: 'Importe',
        amountPlaceholder: '0,00',
        emptyAlbaranes: '¡Sin albaranes aún. Añade tu primer albarán!',
        deleteConfirmAlbaran: '¿Estás seguro de que quieres eliminar este albarán?',
        spendingByCompany: 'Gasto por Empresa',
        noCompanyData: 'Aún no hay datos de gasto. Añade albaranes para ver el gasto por empresa.',
        totalSpent: 'Total Gastado',
        albaranesCount: 'Albaranes',
        spendingOverTime: 'Gasto en el Tiempo',
        fromDate: 'Fecha Desde',
        toDate: 'Fecha Hasta',
        resetDates: 'Restablecer',
        total: 'Total',
        year: 'Año',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        noSpendingData: 'No hay datos de gasto para el período seleccionado.',
        consumption: 'Consumo',
        scanAlbaran: 'Escanear Albarán',
        scannerInstructions: 'Posiciona el código de barras/QR dentro del marco',
        scannerReady: 'Listo para escanear...',
        stopScanner: 'Detener Escáner',
        scanSuccess: '¡Albarán escaneado con éxito!',
        scanError: 'Error al escanear. Por favor, inténtalo de nuevo.',
        noCamera: 'Acceso a la cámara denegado o no disponible.',
        parsingData: 'Analizando datos escaneados...'
    }
};

let currentLang = 'en';

// Data Structure
let inventoryData = {
    families: [],
    items: [],
    reservations: [],
    cierres: [],
    albaranes: []
};

let currentFamilyId = null;
let editingFamilyId = null;
let editingItemId = null;
let editingReservationId = null;
let editingAlbaranId = null;
let deleteTarget = null;
let currentTab = 'inventory';

// DOM Elements - will be initialized after DOM loads
let familyNav, inventoryBody, currentFamilyName, itemCount, addItemBtn;
let searchInput, emptyState, inventoryTable, lastSavedSpan;
let familyModal, familyModalTitle, familyForm, familyNameInput, familyIconInput;
let addFamilyBtn, closeFamilyModal, cancelFamilyBtn;
let itemModal, itemModalTitle, itemForm, itemNameInput, itemQuantityInput;
let itemUnitInput, itemMinStockInput, itemWeeklyInput, itemNotesInput, closeItemModal, cancelItemBtn;
let deleteModal, deleteMessage, closeDeleteModal, cancelDeleteBtn, confirmDeleteBtn;
let exportBtn, importBtn, importFile, langToggle, langFlag, langCode;
let reservationsGrid, reservationsEmpty, reservationCount, addReservationBtn;
let reservationModal, reservationModalTitle, reservationForm, closeReservationModal, cancelReservationBtn;
let reservationNameInput, reservationDateInput, reservationTimeInput, reservationPeopleInput;
let reservationEventInput, reservationPhoneInput, reservationNotesInput;
let cierreCards, cierreEmpty, addCierreBtn, exportCierreBtn, cierreForm, cierreDateInput;
let cierreZCashInput, cierreZCardInput, realCashInput, realCardInput, cierreNotesInput;
let totalZCloseSpan, totalRealSpan, totalDifferenceSpan, cierreStatusDiv;
let albaranesGrid, albaranesEmpty, albaranesCount, addAlbaranBtn;
let albaranModal, albaranModalTitle, albaranForm, closeAlbaranModal, cancelAlbaranBtn;
let albaranCompanyInput, albaranNumberInput, albaranDateInput, albaranAmountInput, albaranNotesInput;
let albaranFromDate, albaranToDate, resetDateFilterBtn;
let spendingTimeChart, spendingTimeChartContainer;
let currentPeriod = 'total';
let scanAlbaranBtn, scannerModal, closeScannerModal, stopScannerBtn;
let scannerVideo, scannerCanvas, scannerStatus;
let scannerStream = null;
let codeReader = null;

function initDOMElements() {
    familyNav = document.getElementById('familyNav');
    inventoryBody = document.getElementById('inventoryBody');
    currentFamilyName = document.getElementById('currentFamilyName');
    itemCount = document.getElementById('itemCount');
    addItemBtn = document.getElementById('addItemBtn');
    searchInput = document.getElementById('searchInput');
    emptyState = document.getElementById('emptyState');
    inventoryTable = document.getElementById('inventoryTable');
    lastSavedSpan = document.getElementById('lastSaved');
    familyModal = document.getElementById('familyModal');
    familyModalTitle = document.getElementById('familyModalTitle');
    familyForm = document.getElementById('familyForm');
    familyNameInput = document.getElementById('familyName');
    familyIconInput = document.getElementById('familyIcon');
    addFamilyBtn = document.getElementById('addFamilyBtn');
    closeFamilyModal = document.getElementById('closeFamilyModal');
    cancelFamilyBtn = document.getElementById('cancelFamilyBtn');
    itemModal = document.getElementById('itemModal');
    itemModalTitle = document.getElementById('itemModalTitle');
    itemForm = document.getElementById('itemForm');
    itemNameInput = document.getElementById('itemName');
    itemQuantityInput = document.getElementById('itemQuantity');
    itemUnitInput = document.getElementById('itemUnit');
    itemMinStockInput = document.getElementById('itemMinStock');
    itemWeeklyInput = document.getElementById('itemWeekly');
    itemNotesInput = document.getElementById('itemNotes');
    closeItemModal = document.getElementById('closeItemModal');
    cancelItemBtn = document.getElementById('cancelItemBtn');
    deleteModal = document.getElementById('deleteModal');
    deleteMessage = document.getElementById('deleteMessage');
    closeDeleteModal = document.getElementById('closeDeleteModal');
    cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    exportBtn = document.getElementById('exportBtn');
    importBtn = document.getElementById('importBtn');
    importFile = document.getElementById('importFile');
    langToggle = document.getElementById('langToggle');
    langFlag = document.getElementById('langFlag');
    langCode = document.getElementById('langCode');
    reservationsGrid = document.getElementById('reservationsGrid');
    reservationsEmpty = document.getElementById('reservationsEmpty');
    reservationCount = document.getElementById('reservationCount');
    addReservationBtn = document.getElementById('addReservationBtn');
    reservationModal = document.getElementById('reservationModal');
    reservationModalTitle = document.getElementById('reservationModalTitle');
    reservationForm = document.getElementById('reservationForm');
    closeReservationModal = document.getElementById('closeReservationModal');
    cancelReservationBtn = document.getElementById('cancelReservationBtn');
    reservationNameInput = document.getElementById('reservationName');
    reservationDateInput = document.getElementById('reservationDate');
    reservationTimeInput = document.getElementById('reservationTime');
    reservationPeopleInput = document.getElementById('reservationPeople');
    reservationEventInput = document.getElementById('reservationEvent');
    reservationPhoneInput = document.getElementById('reservationPhone');
    reservationNotesInput = document.getElementById('reservationNotes');
    cierreCards = document.getElementById('cierreCards');
    cierreEmpty = document.getElementById('cierreEmpty');
    addCierreBtn = document.getElementById('addCierreBtn');
    exportCierreBtn = document.getElementById('exportCierreBtn');
    cierreForm = document.getElementById('cierreForm');
    cierreDateInput = document.getElementById('cierreDate');
    cierreZCashInput = document.getElementById('cierreZCash');
    cierreZCardInput = document.getElementById('cierreZCard');
    realCashInput = document.getElementById('realCash');
    realCardInput = document.getElementById('realCard');
    cierreNotesInput = document.getElementById('cierreNotes');
    totalZCloseSpan = document.getElementById('totalZClose');
    totalRealSpan = document.getElementById('totalReal');
    totalDifferenceSpan = document.getElementById('totalDifference');
    cierreStatusDiv = document.getElementById('cierreStatus');
    albaranesGrid = document.getElementById('albaranesGrid');
    albaranesEmpty = document.getElementById('albaranesEmpty');
    albaranesCount = document.getElementById('albaranesCount');
    addAlbaranBtn = document.getElementById('addAlbaranBtn');
    albaranModal = document.getElementById('albaranModal');
    albaranModalTitle = document.getElementById('albaranModalTitle');
    albaranForm = document.getElementById('albaranForm');
    closeAlbaranModal = document.getElementById('closeAlbaranModal');
    cancelAlbaranBtn = document.getElementById('cancelAlbaranBtn');
    albaranCompanyInput = document.getElementById('albaranCompany');
    albaranNumberInput = document.getElementById('albaranNumber');
    albaranDateInput = document.getElementById('albaranDate');
    albaranAmountInput = document.getElementById('albaranAmount');
    albaranNotesInput = document.getElementById('albaranNotes');
    albaranFromDate = document.getElementById('albaranFromDate');
    albaranToDate = document.getElementById('albaranToDate');
    resetDateFilterBtn = document.getElementById('resetDateFilterBtn');
    spendingTimeChart = document.getElementById('spendingTimeChart');
    spendingTimeChartContainer = document.getElementById('spendingTimeChartContainer');
    scanAlbaranBtn = document.getElementById('scanAlbaranBtn');
    scannerModal = document.getElementById('scannerModal');
    closeScannerModal = document.getElementById('closeScannerModal');
    stopScannerBtn = document.getElementById('stopScannerBtn');
    scannerVideo = document.getElementById('scannerVideo');
    scannerCanvas = document.getElementById('scannerCanvas');
    scannerStatus = document.getElementById('scannerStatus');
}

// ===== Translation Functions =====
function t(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
    
    if (langFlag && langCode) {
        if (currentLang === 'en') {
            langFlag.textContent = '🇬🇧';
            langCode.textContent = 'EN';
        } else {
            langFlag.textContent = '🇪🇸';
            langCode.textContent = 'ES';
        }
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('canMiquelLang', currentLang);
    applyTranslations();
    renderFamilies();
    renderItems();
    updateItemCount();
    
    if (currentFamilyId) {
        const family = inventoryData.families.find(f => f.id === currentFamilyId);
        if (family) {
            const displayName = getFamilyName(family);
            currentFamilyName.textContent = `${family.icon || '📦'} ${displayName}`;
        }
    } else {
        currentFamilyName.textContent = t('selectFamily');
    }
}

function loadLanguage() {
    const savedLang = localStorage.getItem('canMiquelLang');
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
        currentLang = savedLang;
    }
    applyTranslations();
}

// ===== Firebase Functions =====
function initFirebase() {
    console.log('🔥 Attempting to initialize Firebase...');
    
    // Check if Firebase SDK loaded
    if (typeof firebase === 'undefined') {
        console.warn('⚠️ Firebase SDK not loaded - using offline mode');
        return false;
    }
    
    try {
        // Check if already initialized (iOS sometimes re-initializes)
        if (firebase.apps && firebase.apps.length > 0) {
            console.log('✅ Firebase already initialized');
            database = firebase.database();
            firebaseReady = true;
            return true;
        }
        
        // Initialize Firebase
        const app = firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        
        // CRITICAL: Set firebaseReady SYNCHRONOUSLY (before any async operations)
        // This prevents race condition where function returns true but firebaseReady is false
        firebaseReady = true;
        console.log('✅ Firebase initialized, firebaseReady = true');
        
        // Test connection in background (for logging/monitoring only)
        const testRef = database.ref('.info/connected');
        testRef.once('value').then((snap) => {
            if (snap.val() === true) {
                console.log('✅ Firebase connection verified - online');
                database.goOnline();
            } else {
                console.log('ℹ️ Firebase offline - will auto-reconnect');
            }
        }).catch((error) => {
            console.warn('⚠️ Firebase connection test error:', error.message);
            console.log('ℹ️ Firebase will retry connection automatically');
        });
        
        return true;
    } catch (error) {
        console.error('❌ Firebase init error:', error);
        if (error.message) {
            console.error('Error message:', error.message);
        }
        firebaseReady = false;
        return false;
    }
}

// ===== Database Functions =====
const STORAGE_KEY = 'canMiquelInventory';

function saveData() {
    if (firebaseReady && database) {
        // Convert arrays to objects for Firebase (Firebase doesn't handle empty arrays well)
        const dataToSave = {
            families: {},
            items: {},
            reservations: {},
            cierres: {},
            albaranes: {}
        };
        
        inventoryData.families.forEach((family, index) => {
            dataToSave.families[family.id] = family;
        });
        
        inventoryData.items.forEach((item, index) => {
            dataToSave.items[item.id] = item;
        });
        
        if (inventoryData.reservations) {
            inventoryData.reservations.forEach((reservation, index) => {
                dataToSave.reservations[reservation.id] = reservation;
            });
        }
        
        if (inventoryData.cierres) {
            inventoryData.cierres.forEach((cierre, index) => {
                dataToSave.cierres[cierre.id] = cierre;
            });
        }
        
        if (inventoryData.albaranes) {
            inventoryData.albaranes.forEach((albaran, index) => {
                dataToSave.albaranes[albaran.id] = albaran;
            });
        }
        
        database.ref('inventory').set(dataToSave)
            .then(() => {
                console.log('✅ Saved to Firebase');
                updateLastSaved();
            })
            .catch((error) => {
                console.error('❌ Firebase save error:', error);
                saveToLocalStorage();
            });
    } else {
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    try {
        const dataStr = JSON.stringify(inventoryData);
        if (dataStr.length > 5000000) { // ~5MB limit check
            console.warn('⚠️ Data too large for localStorage');
            alert(t('dataLarge'));
        }
        localStorage.setItem(STORAGE_KEY, dataStr);
        updateLastSaved();
    } catch (error) {
        console.error('❌ Error saving to localStorage:', error);
        if (error.name === 'QuotaExceededError') {
            alert(t('storageFull'));
        } else {
            alert('Error saving data: ' + error.message);
        }
    }
}

function loadData() {
    console.log('📥 loadData called, firebaseReady:', firebaseReady);
    
    if (firebaseReady && database) {
        if (lastSavedSpan) lastSavedSpan.textContent = t('connecting');
        
        // CRITICAL: Backup localStorage data BEFORE clearing
        const localBackup = localStorage.getItem(STORAGE_KEY);
        console.log('💾 Backed up localStorage data');
        
        // Set a timeout for iOS (fallback to localStorage if Firebase takes too long)
        let firebaseLoaded = false;
        const timeoutId = setTimeout(() => {
            if (!firebaseLoaded) {
                console.warn('⏱️ Firebase timeout, restoring from backup');
                // Restore the backup if Firebase fails
                if (localBackup) {
                    localStorage.setItem(STORAGE_KEY, localBackup);
                }
                loadFromLocalStorage();
            }
        }, 5000); // 5 second timeout
        
        // DON'T clear localStorage yet - wait until Firebase data is confirmed loaded
        
        // Listen for real-time updates
        database.ref('inventory').on('value', (snapshot) => {
            console.log('📥 Data received from Firebase');
            clearTimeout(timeoutId);
            firebaseLoaded = true;
            
            const data = snapshot.val();
            console.log('📦 Raw Firebase data:', data);
            
            if (data) {
                try {
                    // Convert Firebase objects back to arrays
                    inventoryData.families = data.families ? Object.values(data.families) : [];
                    inventoryData.items = data.items ? Object.values(data.items) : [];
                    inventoryData.reservations = data.reservations ? Object.values(data.reservations) : [];
                    inventoryData.cierres = data.cierres ? Object.values(data.cierres) : [];
                    inventoryData.albaranes = data.albaranes ? Object.values(data.albaranes) : [];
                    
                    console.log('📦 Loaded from Firebase:', inventoryData.families.length, 'families,', inventoryData.items.length, 'items');
                    
                    // Only clear localStorage after successful Firebase load
                    localStorage.removeItem(STORAGE_KEY);
                    console.log('✅ Cleared localStorage (data in Firebase)');
                } catch (error) {
                    console.error('❌ Error parsing Firebase data:', error);
                    console.log('⚠️ Attempting to load from localStorage backup...');
                    loadFromLocalStorage();
                    return;
                }
            } else {
                // Database is empty - check if localStorage has data to migrate
                console.log('📝 Firebase database is empty');
                const localData = localStorage.getItem(STORAGE_KEY);
                
                if (localData) {
                    try {
                        console.log('💾 Found localStorage data, migrating to Firebase...');
                        const parsed = JSON.parse(localData);
                        inventoryData = parsed;
                        migrateDefaultFamilies();
                        
                        // Save to Firebase
                        saveData();
                        console.log('✅ Migrated localStorage data to Firebase');
                        return; // saveData will trigger another 'value' event
                    } catch (error) {
                        console.error('❌ Error parsing localStorage data:', error);
                        initializeDefaultData();
                        saveData();
                        return;
                    }
                } else {
                    // No data anywhere, initialize with defaults
                    console.log('📝 No data found, initializing defaults...');
                    initializeDefaultData();
                    saveData();
                    return;
                }
            }
            
            // Always re-render everything
            console.log('🎨 Rendering families...');
            renderFamilies();
            
            // iOS fix: Always ensure a family is selected
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            
            // Select first family if none selected or if current doesn't exist
            if (inventoryData.families.length > 0) {
                const currentExists = currentFamilyId && inventoryData.families.find(f => f.id === currentFamilyId);
                console.log('Current family exists:', currentExists, 'currentFamilyId:', currentFamilyId);
                
                if (!currentExists) {
                    console.log('Selecting first family:', inventoryData.families[0].id);
                    if (isIOS) {
                        // iOS: Delay family selection to ensure DOM is ready
                        setTimeout(() => {
                            selectFamily(inventoryData.families[0].id);
                        }, 150);
                    } else {
                        selectFamily(inventoryData.families[0].id);
                    }
                } else {
                    console.log('Rendering existing family');
                    if (isIOS) {
                        setTimeout(() => {
                            renderItems();
                            updateItemCount();
                            renderMermaxChart();
                        }, 100);
                    } else {
                        renderItems();
                        updateItemCount();
                        renderMermaxChart();
                    }
                    const family = inventoryData.families.find(f => f.id === currentFamilyId);
                    if (family && currentFamilyName) {
                        currentFamilyName.textContent = `${family.icon || '📦'} ${getFamilyName(family)}`;
                    }
                }
            } else {
                console.log('No families found, rendering empty state');
                renderItems();
                renderMermaxChart();
            }
            
            if (lastSavedSpan) lastSavedSpan.textContent = '✓ ' + t('connected');
        }, (error) => {
            console.error('❌ Firebase read error:', error);
            clearTimeout(timeoutId);
            loadFromLocalStorage();
        });
    } else {
        console.log('📂 Firebase not ready, using localStorage');
        loadFromLocalStorage();
    }
}

function loadFromLocalStorageSync() {
    console.log('📂 Loading from localStorage (sync)');
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            inventoryData = JSON.parse(saved);
            migrateDefaultFamilies();
            
            renderFamilies();
            renderItems();
            renderMermaxChart();
            
            if (inventoryData.families.length > 0) {
                selectFamily(inventoryData.families[0].id);
            }
            
            if (lastSavedSpan) lastSavedSpan.textContent = t('offline');
            console.log('✅ Loaded from localStorage:', inventoryData.families?.length || 0, 'families');
            return true;
        } else {
            console.log('📝 No saved data in localStorage');
            return false;
        }
    } catch (error) {
        console.error('❌ Error loading from localStorage:', error);
        inventoryData = { families: [], items: [], reservations: [], cierres: [], albaranes: [] };
        return false;
    }
}

function loadFromLocalStorage() {
    console.log('📂 Loading from localStorage');
    const hasData = loadFromLocalStorageSync();
    
    if (!hasData) {
        initializeDefaultData();
        saveToLocalStorage();
        renderFamilies();
        renderItems();
        renderMermaxChart();
        
        if (inventoryData.families.length > 0) {
            selectFamily(inventoryData.families[0].id);
        }
    }
    
    if (lastSavedSpan) lastSavedSpan.textContent = t('offline');
}

function initializeDefaultData() {
    inventoryData = {
        families: [
            { id: generateId(), nameKey: 'defaultBeverages', icon: '🍷' },
            { id: generateId(), nameKey: 'defaultMeats', icon: '🥩' },
            { id: generateId(), nameKey: 'defaultVegetables', icon: '🥬' },
            { id: generateId(), nameKey: 'defaultDairy', icon: '🧀' },
            { id: generateId(), nameKey: 'defaultPantry', icon: '🫒' },
            { id: generateId(), nameKey: 'defaultSeafood', icon: '🦐' }
        ],
        items: [],
        reservations: [],
        cierres: [],
        albaranes: []
    };
}

function migrateDefaultFamilies() {
    const defaultMappings = {
        'Beverages': 'defaultBeverages',
        'Meats': 'defaultMeats',
        'Vegetables': 'defaultVegetables',
        'Dairy': 'defaultDairy',
        'Pantry': 'defaultPantry',
        'Seafood': 'defaultSeafood'
    };
    
    let needsSave = false;
    inventoryData.families.forEach(family => {
        if (family.name && defaultMappings[family.name] && !family.nameKey) {
            family.nameKey = defaultMappings[family.name];
            delete family.name;
            needsSave = true;
        }
    });
    
    if (needsSave) {
        saveData();
    }
}

function getFamilyName(family) {
    if (family.nameKey && translations[currentLang][family.nameKey]) {
        return translations[currentLang][family.nameKey];
    }
    return family.name || '';
}

function updateLastSaved() {
    if (!lastSavedSpan) return;
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short' };
    const timeStr = now.toLocaleDateString('en-GB', options);
    lastSavedSpan.textContent = firebaseReady ? `✓ ${timeStr}` : timeStr;
}

// ===== Utility Functions =====
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getItemsForFamily(familyId) {
    if (!inventoryData.items) return [];
    return inventoryData.items.filter(item => item.familyId === familyId);
}

function getItemStatus(item) {
    // Calculate real stock (quantity - weekly waste)
    const realStock = item.quantity - (item.weekly || 0);
    
    if (item.minStock === null || item.minStock === undefined || item.minStock === 0) {
        return realStock <= 0 ? 'critical' : 'ok';
    }
    if (realStock <= 0) {
        return 'critical';
    }
    if (realStock <= item.minStock) {
        return 'low';
    }
    return 'ok';
}

function getRealStock(item) {
    return item.quantity - (item.weekly || 0);
}

function getStatusLabel(status) {
    switch (status) {
        case 'critical': return t('outOfStock');
        case 'low': return t('lowStock');
        default: return t('inStock');
    }
}

// ===== Render Functions =====
function renderFamilies() {
    console.log('🎨 renderFamilies called');
    if (!familyNav) {
        console.error('❌ familyNav element not found');
        return;
    }
    familyNav.innerHTML = '';
    
    if (!inventoryData.families) {
        console.warn('⚠️ No families data');
        return;
    }
    
    console.log('Rendering', inventoryData.families.length, 'families');
    inventoryData.families.forEach((family, index) => {
        const itemsInFamily = getItemsForFamily(family.id).length;
        const itemWord = itemsInFamily !== 1 ? t('items') : t('item');
        const displayName = getFamilyName(family);
        const familyEl = document.createElement('button');
        familyEl.className = `family-item${currentFamilyId === family.id ? ' active' : ''}`;
        familyEl.style.animationDelay = `${index * 0.05}s`;
        familyEl.innerHTML = `
            <span class="family-icon">${family.icon || '📦'}</span>
            <div class="family-info">
                <div class="family-name">${escapeHtml(displayName)}</div>
                <div class="family-count">${itemsInFamily} ${itemWord}</div>
            </div>
            <div class="family-actions">
                <button class="family-action-btn edit" title="Edit" data-id="${family.id}">✏️</button>
                <button class="family-action-btn delete" title="Delete" data-id="${family.id}">🗑️</button>
            </div>
        `;
        
        familyEl.addEventListener('click', (e) => {
            if (!e.target.closest('.family-actions')) {
                selectFamily(family.id);
            }
        });
        
        familyNav.appendChild(familyEl);
    });
    
    document.querySelectorAll('.family-action-btn.edit').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openEditFamilyModal(btn.dataset.id);
        });
    });
    
    document.querySelectorAll('.family-action-btn.delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openDeleteModal('family', btn.dataset.id);
        });
    });
}

function renderItems() {
    console.log('🎨 renderItems called, currentFamilyId:', currentFamilyId);
    
    if (!inventoryBody || !emptyState || !inventoryTable) {
        console.error('❌ Missing DOM elements:', {
            inventoryBody: !!inventoryBody,
            emptyState: !!emptyState,
            inventoryTable: !!inventoryTable
        });
        return;
    }
    
    if (!currentFamilyId) {
        console.log('No family selected, showing empty state');
        inventoryBody.innerHTML = '';
        emptyState.classList.add('visible');
        inventoryTable.style.display = 'none';
        return;
    }
    
    let items = getItemsForFamily(currentFamilyId);
    console.log('Found', items.length, 'items for family', currentFamilyId);
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    if (searchTerm) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            (item.notes && item.notes.toLowerCase().includes(searchTerm))
        );
    }
    
    if (items.length === 0) {
        inventoryBody.innerHTML = '';
        emptyState.classList.add('visible');
        inventoryTable.style.display = 'none';
        return;
    }
    
    emptyState.classList.remove('visible');
    inventoryTable.style.display = 'table';
    
    // iOS fix: Ensure table is visible
    inventoryTable.style.visibility = 'visible';
    inventoryTable.style.opacity = '1';
    
    inventoryBody.innerHTML = '';
    
    console.log('📝 Creating', items.length, 'table rows...');
    
    items.forEach((item, index) => {
        const status = getItemStatus(item);
        const realStock = getRealStock(item);
        const row = document.createElement('tr');
        
        // iOS Safari: Disable animation delays (can cause rendering issues)
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        row.style.animationDelay = isIOS ? '0s' : `${index * 0.03}s`;
        
        row.innerHTML = `
            <td>
                <div class="item-name">${escapeHtml(item.name)}</div>
                ${item.notes ? `<div class="item-notes">${escapeHtml(item.notes)}</div>` : ''}
            </td>
            <td class="quantity-cell">${formatNumber(item.quantity)}</td>
            <td class="quantity-cell" style="color: #c9a349;">${item.weekly ? formatNumber(item.weekly) : '-'}</td>
            <td class="quantity-cell" style="font-weight: 700; color: ${realStock < 0 ? '#b85450' : '#6b9b6b'};">${formatNumber(realStock)}</td>
            <td class="unit-cell">${escapeHtml(item.unit)}</td>
            <td>${item.minStock ? formatNumber(item.minStock) : '-'}</td>
            <td><span class="status-badge ${status}">${getStatusLabel(status)}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit" title="Edit" data-id="${item.id}">✏️</button>
                    <button class="action-btn delete" title="Delete" data-id="${item.id}">🗑️</button>
                </div>
            </td>
        `;
        inventoryBody.appendChild(row);
    });
    
    console.log('✅ Added', inventoryBody.children.length, 'rows to table');
    console.log('📊 Table display:', inventoryTable.style.display);
    console.log('📊 Table visibility:', inventoryTable.style.visibility);
    
    // iOS fix: Force repaint
    void inventoryBody.offsetHeight;
    
    // iOS fix: Use requestAnimationFrame to ensure DOM is updated
    requestAnimationFrame(() => {
        console.log('🔄 Reflow triggered, table should be visible');
        
        // Attach event listeners after rendering
        document.querySelectorAll('.action-btn.edit').forEach(btn => {
            btn.addEventListener('click', () => openEditItemModal(btn.dataset.id));
        });
        
        document.querySelectorAll('.action-btn.delete').forEach(btn => {
            btn.addEventListener('click', () => openDeleteModal('item', btn.dataset.id));
        });
    });
}

// ===== Mermax Chart =====
function renderMermaxChart() {
    const chartElement = document.getElementById('mermaxChart');
    const chartContainer = document.getElementById('mermaxChartContainer');
    
    if (!chartElement || !chartContainer) {
        console.log('Chart elements not found');
        return;
    }
    
    // Make sure we have the data structure
    if (!inventoryData || !inventoryData.families || !inventoryData.items) {
        console.log('Inventory data not ready');
        chartContainer.style.display = 'none';
        return;
    }
    
    // Calculate mermax totals by family
    const familyMermax = {};
    let totalMermax = 0;
    
    inventoryData.families.forEach(family => {
        const items = inventoryData.items.filter(item => item.familyId === family.id);
        const familyTotal = items.reduce((sum, item) => {
            return sum + (parseFloat(item.weekly) || 0);
        }, 0);
        
        if (familyTotal > 0) {
            familyMermax[family.id] = {
                name: getFamilyName(family),
                icon: family.icon || '📦',
                total: familyTotal
            };
            totalMermax += familyTotal;
        }
    });
    
    // Sort by total (descending)
    const sortedFamilies = Object.entries(familyMermax)
        .sort((a, b) => b[1].total - a[1].total);
    
    // Always show container
    chartContainer.style.display = 'block';
    
    // Render chart
    if (sortedFamilies.length === 0) {
        chartElement.innerHTML = `<div class="chart-no-data">${t('noMermaxData')}</div>`;
        return;
    }
    
    const maxValue = sortedFamilies[0][1].total;
    
    chartElement.innerHTML = sortedFamilies.map(([familyId, data]) => {
        const percentage = (data.total / maxValue) * 100;
        return `
            <div class="chart-bar-container">
                <div class="chart-label">
                    <span class="chart-label-icon">${data.icon}</span>
                    <span>${escapeHtml(data.name)}</span>
                </div>
                <div class="chart-bar-wrapper">
                    <div class="chart-bar" style="width: ${percentage}%;">
                        <span class="chart-bar-value">${formatNumber(data.total)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function selectFamily(familyId) {
    console.log('🎯 selectFamily called:', familyId);
    currentFamilyId = familyId;
    const family = inventoryData.families.find(f => f.id === familyId);
    
    if (family) {
        const displayName = getFamilyName(family);
        if (currentFamilyName) currentFamilyName.textContent = `${family.icon || '📦'} ${displayName}`;
        if (addItemBtn) addItemBtn.disabled = false;
        updateItemCount();
    }
    
    renderFamilies();
    
    // iOS fix: Delay rendering to ensure DOM is ready
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
        // On iOS, use setTimeout to ensure rendering happens after layout
        setTimeout(() => {
            renderItems();
            renderMermaxChart();
        }, 50);
    } else {
        renderItems();
        renderMermaxChart();
    }
}

function updateItemCount() {
    if (!itemCount) return;
    if (currentFamilyId) {
        const items = getItemsForFamily(currentFamilyId);
        const itemWord = items.length !== 1 ? t('items') : t('item');
        itemCount.textContent = `${items.length} ${itemWord}`;
    }
}

// ===== Modal Functions =====
function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function openAddFamilyModal() {
    editingFamilyId = null;
    if (familyModalTitle) familyModalTitle.textContent = t('addFamily');
    if (familyForm) familyForm.reset();
    openModal(familyModal);
    if (familyNameInput) familyNameInput.focus();
}

function openEditFamilyModal(familyId) {
    editingFamilyId = familyId;
    const family = inventoryData.families.find(f => f.id === familyId);
    if (!family) return;
    
    if (familyModalTitle) familyModalTitle.textContent = t('editFamily');
    if (familyNameInput) familyNameInput.value = getFamilyName(family);
    if (familyIconInput) familyIconInput.value = family.icon || '';
    openModal(familyModal);
    if (familyNameInput) familyNameInput.focus();
}

function openAddItemModal() {
    if (!currentFamilyId) return;
    
    editingItemId = null;
    if (itemModalTitle) itemModalTitle.textContent = t('addItem');
    if (itemForm) itemForm.reset();
    openModal(itemModal);
    if (itemNameInput) itemNameInput.focus();
}

function openEditItemModal(itemId) {
    editingItemId = itemId;
    const item = inventoryData.items.find(i => i.id === itemId);
    if (!item) return;
    
    if (itemModalTitle) itemModalTitle.textContent = t('editItem');
    if (itemNameInput) itemNameInput.value = item.name;
    if (itemQuantityInput) itemQuantityInput.value = item.quantity;
    if (itemUnitInput) itemUnitInput.value = item.unit;
    if (itemMinStockInput) itemMinStockInput.value = item.minStock || '';
    if (itemWeeklyInput) itemWeeklyInput.value = item.weekly || '';
    if (itemNotesInput) itemNotesInput.value = item.notes || '';
    openModal(itemModal);
    if (itemNameInput) itemNameInput.focus();
}

function openDeleteModal(type, id) {
    deleteTarget = { type, id };
    
    if (type === 'family') {
        const family = inventoryData.families.find(f => f.id === id);
        const displayName = getFamilyName(family);
        const itemsCount = getItemsForFamily(id).length;
        const itemWord = itemsCount !== 1 ? t('items') : t('item');
        if (deleteMessage) deleteMessage.innerHTML = `${t('deleteConfirmFamily')} <strong>${escapeHtml(displayName)}</strong>?${itemsCount > 0 ? `<br><br>${t('deleteConfirmFamilyItems')} <strong>${itemsCount} ${itemWord}</strong> ${t('deleteConfirmFamilyItemsIn')}` : ''}`;
    } else if (type === 'reservation') {
        const reservation = inventoryData.reservations.find(r => r.id === id);
        if (deleteMessage) deleteMessage.innerHTML = `Are you sure you want to delete the reservation for <strong>${escapeHtml(reservation.name)}</strong> on ${formatDate(reservation.date)}?`;
    } else if (type === 'albaran') {
        const albaran = inventoryData.albaranes.find(a => a.id === id);
        if (deleteMessage) deleteMessage.innerHTML = `${t('deleteConfirmAlbaran')}<br><br><strong>${escapeHtml(albaran.company)}</strong> - ${escapeHtml(albaran.number)} (${formatDate(albaran.date)})`;
    } else {
        const item = inventoryData.items.find(i => i.id === id);
        if (deleteMessage) deleteMessage.innerHTML = `${t('deleteConfirmFamily')} <strong>${escapeHtml(item.name)}</strong>?`;
    }
    
    openModal(deleteModal);
}

// ===== CRUD Operations =====
function saveFamily() {
    const name = familyNameInput ? familyNameInput.value.trim() : '';
    const icon = familyIconInput ? familyIconInput.value.trim() || '📦' : '📦';
    
    if (!name) {
        alert(t('enterFamilyName'));
        return;
    }
    
    if (editingFamilyId) {
        const family = inventoryData.families.find(f => f.id === editingFamilyId);
        if (family) {
            delete family.nameKey;
            family.name = name;
            family.icon = icon;
        }
    } else {
        inventoryData.families.push({
            id: generateId(),
            name,
            icon
        });
    }
    
    saveData();
    closeModal(familyModal);
    renderFamilies();
    
    if (editingFamilyId === currentFamilyId) {
        const family = inventoryData.families.find(f => f.id === currentFamilyId);
        if (family && currentFamilyName) {
            currentFamilyName.textContent = `${family.icon || '📦'} ${family.name}`;
        }
    }
}

function saveItem() {
    const name = itemNameInput ? itemNameInput.value.trim() : '';
    const quantity = itemQuantityInput ? parseFloat(itemQuantityInput.value) || 0 : 0;
    const unit = itemUnitInput ? itemUnitInput.value : 'units';
    const minStock = itemMinStockInput ? parseFloat(itemMinStockInput.value) || 0 : 0;
    const weekly = itemWeeklyInput ? parseFloat(itemWeeklyInput.value) || 0 : 0;
    const notes = itemNotesInput ? itemNotesInput.value.trim() : '';
    
    if (!name) {
        alert(t('enterItemName'));
        return;
    }
    
    // Validate numeric values
    if (quantity < 0 || minStock < 0 || weekly < 0) {
        alert(t('negativeValue'));
        return;
    }
    
    if (!isFinite(quantity) || !isFinite(minStock) || !isFinite(weekly)) {
        alert(t('invalidNumber'));
        return;
    }
    
    if (!inventoryData.items) inventoryData.items = [];
    
    if (editingItemId) {
        const item = inventoryData.items.find(i => i.id === editingItemId);
        if (item) {
            item.name = name;
            item.quantity = quantity;
            item.unit = unit;
            item.minStock = minStock;
            item.weekly = weekly;
            item.notes = notes;
        }
    } else {
        inventoryData.items.push({
            id: generateId(),
            familyId: currentFamilyId,
            name,
            quantity,
            unit,
            minStock,
            weekly,
            notes
        });
    }
    
    saveData();
    closeModal(itemModal);
    renderItems();
    updateItemCount();
    renderFamilies();
    renderMermaxChart();
}

function confirmDelete() {
    if (!deleteTarget) return;
    
    if (deleteTarget.type === 'family') {
        inventoryData.items = inventoryData.items.filter(item => item.familyId !== deleteTarget.id);
        inventoryData.families = inventoryData.families.filter(f => f.id !== deleteTarget.id);
        
        if (currentFamilyId === deleteTarget.id) {
            currentFamilyId = null;
            if (currentFamilyName) currentFamilyName.textContent = t('selectFamily');
            if (itemCount) itemCount.textContent = `0 ${t('items')}`;
            if (addItemBtn) addItemBtn.disabled = true;
        }
        renderFamilies();
        renderItems();
        updateItemCount();
        renderMermaxChart();
    } else if (deleteTarget.type === 'reservation') {
        inventoryData.reservations = inventoryData.reservations.filter(r => r.id !== deleteTarget.id);
        renderReservations();
    } else if (deleteTarget.type === 'albaran') {
        inventoryData.albaranes = inventoryData.albaranes.filter(a => a.id !== deleteTarget.id);
        renderAlbaranes();
    } else {
        inventoryData.items = inventoryData.items.filter(i => i.id !== deleteTarget.id);
        renderFamilies();
        renderItems();
        updateItemCount();
        renderMermaxChart();
    }
    
    saveData();
    closeModal(deleteModal);
    deleteTarget = null;
}

// ===== Export/Import =====
function exportData() {
    const dataStr = JSON.stringify(inventoryData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const date = new Date().toISOString().split('T')[0];
    const filename = `can-miquel-inventory-${date}.json`;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importData(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            if (!data.families || !Array.isArray(data.families) || 
                !data.items || !Array.isArray(data.items)) {
                throw new Error('Invalid data format');
            }
            
            const confirmImport = confirm(
                `${t('importConfirm')}\n\n` +
                `• ${data.families.length} ${t('importFamilies')}\n` +
                `• ${data.items.length} ${t('importItems')}\n\n` +
                `${t('importContinue')}`
            );
            
            if (confirmImport) {
                inventoryData = data;
                saveData();
                currentFamilyId = null;
                if (currentFamilyName) currentFamilyName.textContent = t('selectFamily');
                if (itemCount) itemCount.textContent = `0 ${t('items')}`;
                if (addItemBtn) addItemBtn.disabled = true;
                renderFamilies();
                renderItems();
                alert(t('importSuccess'));
            }
        } catch (error) {
            console.error('Import error:', error);
            alert(t('importError'));
        }
    };
    
    reader.readAsText(file);
}

// ===== Cierre del Día Functions =====
function calculateCierre() {
    const zCash = parseFloat(cierreZCashInput?.value) || 0;
    const zCard = parseFloat(cierreZCardInput?.value) || 0;
    const rCash = parseFloat(realCashInput?.value) || 0;
    const rCard = parseFloat(realCardInput?.value) || 0;
    
    const totalZ = zCash + zCard;
    const totalR = rCash + rCard;
    const diff = totalZ - totalR;
    const cashDiff = zCash - rCash;
    const cardDiff = zCard - rCard;
    
    if (totalZCloseSpan) totalZCloseSpan.textContent = `$${totalZ.toFixed(2)}`;
    if (totalRealSpan) totalRealSpan.textContent = `$${totalR.toFixed(2)}`;
    if (totalDifferenceSpan) totalDifferenceSpan.textContent = `$${diff.toFixed(2)}`;
    
    if (cierreStatusDiv) {
        const isCorrect = Math.abs(diff) <= 0.01;
        cierreStatusDiv.textContent = `${t('status')}: ${isCorrect ? '✅ ' + t('correct') : '⚠️ ' + t('review')}`;
        cierreStatusDiv.className = `calc-status ${isCorrect ? 'correct' : 'review'}`;
    }
}

function saveCierre() {
    const date = cierreDateInput?.value;
    const zCash = parseFloat(cierreZCashInput?.value) || 0;
    const zCard = parseFloat(cierreZCardInput?.value) || 0;
    const rCash = parseFloat(realCashInput?.value) || 0;
    const rCard = parseFloat(realCardInput?.value) || 0;
    const notes = cierreNotesInput?.value.trim() || '';
    
    if (!date) {
        alert(t('enterDate'));
        return;
    }
    
    if (zCash === 0 && zCard === 0 && rCash === 0 && rCard === 0) {
        alert(t('enterAtLeastOneValue'));
        return;
    }
    
    // Validate numeric values
    if (zCash < 0 || zCard < 0 || rCash < 0 || rCard < 0) {
        alert(t('negativeValue'));
        return;
    }
    
    if (!isFinite(zCash) || !isFinite(zCard) || !isFinite(rCash) || !isFinite(rCard)) {
        alert(t('invalidNumber'));
        return;
    }
    
    const totalZ = zCash + zCard;
    const totalR = rCash + rCard;
    const diff = totalZ - totalR;
    const cashDiff = zCash - rCash;
    const cardDiff = zCard - rCard;
    const status = Math.abs(diff) <= 0.01 ? 'correct' : 'review';
    
    if (!inventoryData.cierres) inventoryData.cierres = [];
    
    // Check if already exists for this date
    const existingIndex = inventoryData.cierres.findIndex(c => c.date === date);
    const cierreData = {
        id: existingIndex >= 0 ? inventoryData.cierres[existingIndex].id : generateId(),
        date,
        zCash,
        zCard,
        rCash,
        rCard,
        totalZ,
        totalR,
        diff,
        cashDiff,
        cardDiff,
        status,
        notes
    };
    
    if (existingIndex >= 0) {
        if (confirm(`Already exists a close for ${date}. Replace it?`)) {
            inventoryData.cierres[existingIndex] = cierreData;
        } else {
            return;
        }
    } else {
        inventoryData.cierres.push(cierreData);
    }
    
    saveData();
    resetCierreForm();
    renderCierres();
    alert(`${t('closeSavedFor')} ${date}`);
}

function resetCierreForm() {
    if (cierreForm) cierreForm.reset();
    if (cierreDateInput) cierreDateInput.value = new Date().toISOString().split('T')[0];
    calculateCierre();
}

function exportCierreToExcel() {
    if (!inventoryData.cierres || inventoryData.cierres.length === 0) {
        alert(t('noDataExport'));
        return;
    }
    
    // Create CSV content
    let csv = 'CIERRE DEL DIA - RESTAURANTE CAN MIQUEL\n\n';
    csv += 'Fecha,CIERRE Z Efectivo,CIERRE Z Tarjetas,Efectivo Real,Tarjetas Real,Total Cierre Z,Total Real,Dif. Efectivo,Dif. Tarjetas,Dif. Total,Estado,Observaciones\n';
    
    // Sort by date ascending
    const sorted = [...inventoryData.cierres].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    let totalZCash = 0, totalZCard = 0, totalRCash = 0, totalRCard = 0;
    let totalZSum = 0, totalRSum = 0, totalDiffSum = 0;
    
    sorted.forEach(c => {
        const status = c.status === 'correct' ? 'CORRECTO' : 'REVISAR';
        csv += `${c.date},${c.zCash.toFixed(2)},${c.zCard.toFixed(2)},${c.rCash.toFixed(2)},${c.rCard.toFixed(2)},${c.totalZ.toFixed(2)},${c.totalR.toFixed(2)},${c.cashDiff.toFixed(2)},${c.cardDiff.toFixed(2)},${c.diff.toFixed(2)},${status},"${c.notes || ''}"\n`;
        
        totalZCash += c.zCash;
        totalZCard += c.zCard;
        totalRCash += c.rCash;
        totalRCard += c.rCard;
        totalZSum += c.totalZ;
        totalRSum += c.totalR;
        totalDiffSum += c.diff;
    });
    
    // Add totals row
    csv += `\nTOTALES,${totalZCash.toFixed(2)},${totalZCard.toFixed(2)},${totalRCash.toFixed(2)},${totalRCard.toFixed(2)},${totalZSum.toFixed(2)},${totalRSum.toFixed(2)},${(totalZCash - totalRCash).toFixed(2)},${(totalZCard - totalRCard).toFixed(2)},${totalDiffSum.toFixed(2)},,\n`;
    
    // Add summary
    csv += `\nRESUMEN\n`;
    csv += `Total de cierres:,${sorted.length}\n`;
    csv += `Cierres correctos:,${sorted.filter(c => c.status === 'correct').length}\n`;
    csv += `Cierres a revisar:,${sorted.filter(c => c.status === 'review').length}\n`;
    const avgDiff = sorted.length > 0 ? (totalDiffSum / sorted.length).toFixed(2) : '0.00';
    csv += `Diferencia promedio:,$${avgDiff}\n`;
    
    // Create and download file
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const date = new Date().toISOString().split('T')[0];
    const filename = `cierre-restaurante-${date}.csv`;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(t('exportSuccess'));
}

function renderCierres() {
    if (!cierreCards || !cierreEmpty) return;
    
    if (!inventoryData.cierres || inventoryData.cierres.length === 0) {
        cierreCards.innerHTML = '';
        cierreEmpty.classList.add('visible');
        return;
    }
    
    cierreEmpty.classList.remove('visible');
    
    // Sort by date descending
    const sorted = [...inventoryData.cierres].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    cierreCards.innerHTML = '';
    sorted.forEach((cierre) => {
        const card = document.createElement('div');
        card.className = `cierre-history-card ${cierre.status}`;
        
        card.innerHTML = `
            <div class="cierre-card-header">
                <div class="cierre-card-date">📅 ${formatDate(cierre.date)}</div>
                <div class="cierre-card-status ${cierre.status}">
                    ${cierre.status === 'correct' ? '✅ ' + t('correct') : '⚠️ ' + t('review')}
                </div>
            </div>
            <div class="cierre-card-details">
                <div class="cierre-detail">
                    <span class="cierre-detail-label">${t('cierreZCash')}</span>
                    <span class="cierre-detail-value">$${cierre.zCash.toFixed(2)}</span>
                </div>
                <div class="cierre-detail">
                    <span class="cierre-detail-label">${t('realCash')}</span>
                    <span class="cierre-detail-value">$${cierre.rCash.toFixed(2)}</span>
                </div>
                <div class="cierre-detail">
                    <span class="cierre-detail-label">${t('cierreZCard')}</span>
                    <span class="cierre-detail-value">$${cierre.zCard.toFixed(2)}</span>
                </div>
                <div class="cierre-detail">
                    <span class="cierre-detail-label">${t('realCard')}</span>
                    <span class="cierre-detail-value">$${cierre.rCard.toFixed(2)}</span>
                </div>
            </div>
            <div class="cierre-card-summary">
                <div class="cierre-summary-row">
                    <span>${t('cashDiff')}:</span>
                    <strong style="color: ${Math.abs(cierre.cashDiff) <= 0.01 ? '#6b9b6b' : '#c9a349'};">$${cierre.cashDiff.toFixed(2)}</strong>
                </div>
                <div class="cierre-summary-row">
                    <span>${t('cardDiff')}:</span>
                    <strong style="color: ${Math.abs(cierre.cardDiff) <= 0.01 ? '#6b9b6b' : '#c9a349'};">$${cierre.cardDiff.toFixed(2)}</strong>
                </div>
                <div class="cierre-summary-row total">
                    <span>${t('difference')}:</span>
                    <strong style="color: ${Math.abs(cierre.diff) <= 0.01 ? '#6b9b6b' : '#b85450'};">$${cierre.diff.toFixed(2)}</strong>
                </div>
            </div>
            ${cierre.notes ? `<div class="item-notes" style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--color-border);">${escapeHtml(cierre.notes)}</div>` : ''}
        `;
        
        cierreCards.appendChild(card);
    });
}

// ===== Tab Navigation =====
function switchTab(tabName) {
    currentTab = tabName;
    
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Update content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    if (tabName === 'inventory') {
        const invSection = document.getElementById('inventorySection');
        if (invSection) invSection.classList.add('active');
        renderMermaxChart();
    } else if (tabName === 'reservations') {
        const resSection = document.getElementById('reservationsSection');
        if (resSection) resSection.classList.add('active');
        renderReservations();
    } else if (tabName === 'cierre') {
        const cierreSection = document.getElementById('cierreSection');
        if (cierreSection) cierreSection.classList.add('active');
        renderCierres();
        if (cierreDateInput) cierreDateInput.value = new Date().toISOString().split('T')[0];
        calculateCierre();
    } else if (tabName === 'albaranes') {
        const albaranesSection = document.getElementById('albaranesSection');
        if (albaranesSection) albaranesSection.classList.add('active');
        renderAlbaranes();
    }
}

// ===== Reservations Functions =====
function renderReservations() {
    if (!reservationsGrid || !reservationsEmpty) return;
    
    if (!inventoryData.reservations || inventoryData.reservations.length === 0) {
        reservationsGrid.innerHTML = '';
        reservationsEmpty.classList.add('visible');
        if (reservationCount) reservationCount.textContent = `0 ${t('reservations')}`;
        return;
    }
    
    reservationsEmpty.classList.remove('visible');
    
    // Sort by date and time
    const sortedReservations = [...inventoryData.reservations].sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA - dateB;
    });
    
    reservationsGrid.innerHTML = '';
    sortedReservations.forEach((reservation) => {
        const card = document.createElement('div');
        card.className = 'reservation-card';
        
        const eventLabel = reservation.event ? t(reservation.event) : '';
        const peopleWord = reservation.people === 1 ? t('person') : t('people');
        
        card.innerHTML = `
            <div class="reservation-header">
                <div class="reservation-name">${escapeHtml(reservation.name)}</div>
                ${reservation.event ? `<span class="reservation-event">${getEventEmoji(reservation.event)} ${eventLabel}</span>` : ''}
            </div>
            <div class="reservation-datetime">
                <div class="reservation-date">📅 ${formatDate(reservation.date)}</div>
                <div class="reservation-time">🕐 ${reservation.time}</div>
            </div>
            <div class="reservation-people">👥 ${reservation.people} ${peopleWord}</div>
            ${reservation.phone ? `<div class="reservation-phone">📞 ${escapeHtml(reservation.phone)}</div>` : ''}
            ${reservation.notes ? `<div class="reservation-notes">${escapeHtml(reservation.notes)}</div>` : ''}
            <div class="reservation-actions">
                <button class="action-btn edit" data-id="${reservation.id}">✏️</button>
                <button class="action-btn delete" data-id="${reservation.id}">🗑️</button>
            </div>
        `;
        
        reservationsGrid.appendChild(card);
    });
    
    if (reservationCount) {
        const count = inventoryData.reservations.length;
        reservationCount.textContent = `${count} ${count === 1 ? 'reservation' : 'reservations'}`;
    }
    
    // Add event listeners
    document.querySelectorAll('.reservation-card .action-btn.edit').forEach(btn => {
        btn.addEventListener('click', () => openEditReservationModal(btn.dataset.id));
    });
    
    document.querySelectorAll('.reservation-card .action-btn.delete').forEach(btn => {
        btn.addEventListener('click', () => openDeleteModal('reservation', btn.dataset.id));
    });
}

function getEventEmoji(eventType) {
    switch(eventType) {
        case 'birthday': return '🎂';
        case 'anniversary': return '💝';
        case 'business': return '💼';
        case 'other': return '🎉';
        default: return '🍽️';
    }
}

function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-GB', options);
}

function openAddReservationModal() {
    editingReservationId = null;
    if (reservationModalTitle) reservationModalTitle.textContent = t('addReservation');
    if (reservationForm) reservationForm.reset();
    
    // Set default date to today
    if (reservationDateInput) {
        const today = new Date().toISOString().split('T')[0];
        reservationDateInput.value = today;
    }
    
    openModal(reservationModal);
    if (reservationNameInput) reservationNameInput.focus();
}

function openEditReservationModal(reservationId) {
    editingReservationId = reservationId;
    const reservation = inventoryData.reservations.find(r => r.id === reservationId);
    if (!reservation) return;
    
    if (reservationModalTitle) reservationModalTitle.textContent = t('editReservation');
    if (reservationNameInput) reservationNameInput.value = reservation.name;
    if (reservationDateInput) reservationDateInput.value = reservation.date;
    if (reservationTimeInput) reservationTimeInput.value = reservation.time;
    if (reservationPeopleInput) reservationPeopleInput.value = reservation.people;
    if (reservationEventInput) reservationEventInput.value = reservation.event || '';
    if (reservationPhoneInput) reservationPhoneInput.value = reservation.phone || '';
    if (reservationNotesInput) reservationNotesInput.value = reservation.notes || '';
    
    openModal(reservationModal);
    if (reservationNameInput) reservationNameInput.focus();
}

function saveReservation() {
    const name = reservationNameInput ? reservationNameInput.value.trim() : '';
    const date = reservationDateInput ? reservationDateInput.value : '';
    const time = reservationTimeInput ? reservationTimeInput.value : '';
    const people = reservationPeopleInput ? parseInt(reservationPeopleInput.value) : 0;
    const event = reservationEventInput ? reservationEventInput.value : '';
    const phone = reservationPhoneInput ? reservationPhoneInput.value.trim() : '';
    const notes = reservationNotesInput ? reservationNotesInput.value.trim() : '';
    
    if (!name || !date || !time || !people) {
        alert(t('fillAllFields'));
        return;
    }
    
    if (!inventoryData.reservations) inventoryData.reservations = [];
    
    if (editingReservationId) {
        const reservation = inventoryData.reservations.find(r => r.id === editingReservationId);
        if (reservation) {
            reservation.name = name;
            reservation.date = date;
            reservation.time = time;
            reservation.people = people;
            reservation.event = event;
            reservation.phone = phone;
            reservation.notes = notes;
        }
    } else {
        inventoryData.reservations.push({
            id: generateId(),
            name,
            date,
            time,
            people,
            event,
            phone,
            notes
        });
    }
    
    saveData();
    closeModal(reservationModal);
    renderReservations();
}

// ===== Albaranes Functions =====
function getFilteredAlbaranes() {
    if (!inventoryData.albaranes || inventoryData.albaranes.length === 0) {
        return [];
    }
    
    let filtered = [...inventoryData.albaranes];
    
    // Apply date range filter
    if (albaranFromDate && albaranFromDate.value) {
        const fromDate = new Date(albaranFromDate.value);
        fromDate.setHours(0, 0, 0, 0);
        filtered = filtered.filter(albaran => {
            const albaranDate = new Date(albaran.date);
            albaranDate.setHours(0, 0, 0, 0);
            return albaranDate >= fromDate;
        });
    }
    
    if (albaranToDate && albaranToDate.value) {
        const toDate = new Date(albaranToDate.value);
        toDate.setHours(23, 59, 59, 999);
        filtered = filtered.filter(albaran => {
            const albaranDate = new Date(albaran.date);
            albaranDate.setHours(0, 0, 0, 0);
            return albaranDate <= toDate;
        });
    }
    
    return filtered;
}

function getDateKey(date, period) {
    const d = new Date(date);
    
    switch(period) {
        case 'day':
            return d.toISOString().split('T')[0]; // YYYY-MM-DD
        case 'week':
            const weekStart = new Date(d);
            const day = d.getDay();
            const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Start of week (Monday)
            weekStart.setDate(diff);
            weekStart.setHours(0, 0, 0, 0);
            return weekStart.toISOString().split('T')[0];
        case 'month':
            return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`; // YYYY-MM
        case 'year':
            return String(d.getFullYear()); // YYYY
        case 'total':
        default:
            return 'total';
    }
}

function formatDateKey(key, period) {
    if (period === 'total') return t('total');
    if (period === 'year') return key;
    if (period === 'month') {
        const [year, month] = key.split('-');
        const monthNames = currentLang === 'es' 
            ? ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
            : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthNames[parseInt(month) - 1]} ${year}`;
    }
    if (period === 'week') {
        const date = new Date(key);
        const weekEnd = new Date(date);
        weekEnd.setDate(date.getDate() + 6);
        const startStr = formatDate(key);
        const endStr = formatDate(weekEnd.toISOString().split('T')[0]);
        return `${startStr} - ${endStr}`;
    }
    if (period === 'day') {
        return formatDate(key);
    }
    return key;
}

function aggregateSpendingByPeriod(albaranes, period) {
    const aggregated = {};
    
    albaranes.forEach(albaran => {
        const key = getDateKey(albaran.date, period);
        if (!aggregated[key]) {
            aggregated[key] = {
                key,
                amount: 0,
                count: 0
            };
        }
        aggregated[key].amount += parseFloat(albaran.amount) || 0;
        aggregated[key].count += 1;
    });
    
    // Convert to array and sort
    const sorted = Object.values(aggregated);
    
    if (period === 'total') {
        return sorted; // Single entry
    }
    
    // Sort by date key
    sorted.sort((a, b) => {
        if (period === 'year') return a.key.localeCompare(b.key);
        if (period === 'month') return a.key.localeCompare(b.key);
        if (period === 'week' || period === 'day') {
            return new Date(a.key) - new Date(b.key);
        }
        return 0;
    });
    
    return sorted;
}

function renderSpendingTimeChart() {
    if (!spendingTimeChart || !spendingTimeChartContainer) {
        console.log('Spending time chart elements not found');
        return;
    }
    
    const filteredAlbaranes = getFilteredAlbaranes();
    
    if (filteredAlbaranes.length === 0) {
        spendingTimeChartContainer.style.display = 'none';
        return;
    }
    
    spendingTimeChartContainer.style.display = 'block';
    
    const aggregated = aggregateSpendingByPeriod(filteredAlbaranes, currentPeriod);
    
    if (aggregated.length === 0) {
        spendingTimeChart.innerHTML = `<div class="chart-no-data">${t('noSpendingData')}</div>`;
        return;
    }
    
    const maxValue = Math.max(...aggregated.map(a => a.amount));
    
    spendingTimeChart.innerHTML = aggregated.map(data => {
        const percentage = maxValue > 0 ? (data.amount / maxValue) * 100 : 0;
        const label = formatDateKey(data.key, currentPeriod);
        return `
            <div class="chart-bar-container">
                <div class="chart-label">
                    <span>${escapeHtml(label)}</span>
                    <span class="chart-label-count">(${data.count} ${t('albaranesCount')})</span>
                </div>
                <div class="chart-bar-wrapper">
                    <div class="chart-bar" style="width: ${percentage}%;">
                        <span class="chart-bar-value">${formatCurrency(data.amount)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderCompanySpendingChart() {
    const chartElement = document.getElementById('companyChart');
    const chartContainer = document.getElementById('companyChartContainer');
    
    if (!chartElement || !chartContainer) {
        console.log('Company chart elements not found');
        return;
    }
    
    const filteredAlbaranes = getFilteredAlbaranes();
    
    if (filteredAlbaranes.length === 0) {
        chartContainer.style.display = 'none';
        return;
    }
    
    // Group albaranes by company
    const companyData = {};
    
    filteredAlbaranes.forEach(albaran => {
        const companyName = albaran.company.trim();
        if (!companyData[companyName]) {
            companyData[companyName] = {
                name: companyName,
                totalAmount: 0,
                count: 0
            };
        }
        companyData[companyName].totalAmount += parseFloat(albaran.amount) || 0;
        companyData[companyName].count += 1;
    });
    
    // Convert to array and sort by total amount (descending)
    const sortedCompanies = Object.values(companyData)
        .sort((a, b) => b.totalAmount - a.totalAmount);
    
    // Always show container
    chartContainer.style.display = 'block';
    
    // Render chart
    if (sortedCompanies.length === 0) {
        chartElement.innerHTML = `<div class="chart-no-data">${t('noCompanyData')}</div>`;
        return;
    }
    
    const maxValue = sortedCompanies[0].totalAmount;
    
    chartElement.innerHTML = sortedCompanies.map(company => {
        const percentage = maxValue > 0 ? (company.totalAmount / maxValue) * 100 : 0;
        return `
            <div class="chart-bar-container">
                <div class="chart-label">
                    <span class="chart-label-icon">🏢</span>
                    <span>${escapeHtml(company.name)}</span>
                    <span class="chart-label-count">(${company.count} ${t('albaranesCount')})</span>
                </div>
                <div class="chart-bar-wrapper">
                    <div class="chart-bar" style="width: ${percentage}%;">
                        <span class="chart-bar-value">${formatCurrency(company.totalAmount)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderAlbaranes() {
    if (!albaranesGrid || !albaranesEmpty) return;
    
    const filteredAlbaranes = getFilteredAlbaranes();
    
    // Render charts first
    renderSpendingTimeChart();
    renderCompanySpendingChart();
    
    if (filteredAlbaranes.length === 0) {
        albaranesGrid.innerHTML = '';
        albaranesEmpty.classList.add('visible');
        if (albaranesCount) albaranesCount.textContent = `0 ${t('albaranes')}`;
        return;
    }
    
    albaranesEmpty.classList.remove('visible');
    
    // Group albaranes by company
    const companyGroups = {};
    
    filteredAlbaranes.forEach(albaran => {
        const companyName = albaran.company.trim();
        if (!companyGroups[companyName]) {
            companyGroups[companyName] = [];
        }
        companyGroups[companyName].push(albaran);
    });
    
    // Sort companies by total spending (descending)
    const sortedCompanies = Object.entries(companyGroups)
        .map(([companyName, albaranes]) => {
            const totalAmount = albaranes.reduce((sum, a) => sum + (parseFloat(a.amount) || 0), 0);
            return { companyName, albaranes, totalAmount };
        })
        .sort((a, b) => b.totalAmount - a.totalAmount);
    
    albaranesGrid.innerHTML = '';
    
    // Render grouped by company
    sortedCompanies.forEach(({ companyName, albaranes, totalAmount }) => {
        // Company header
        const companyHeader = document.createElement('div');
        companyHeader.className = 'company-group-header';
        companyHeader.innerHTML = `
            <div class="company-group-title">
                <span class="company-icon">🏢</span>
                <span class="company-name">${escapeHtml(companyName)}</span>
            </div>
            <div class="company-group-summary">
                <span class="company-total">${t('totalSpent')}: ${formatCurrency(totalAmount)}</span>
                <span class="company-count">${albaranes.length} ${t('albaranesCount')}</span>
            </div>
        `;
        albaranesGrid.appendChild(companyHeader);
        
        // Sort albaranes by date (newest first) within each company
        const sortedCompanyAlbaranes = [...albaranes].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
        });
        
        // Render albaranes for this company
        sortedCompanyAlbaranes.forEach((albaran) => {
            const card = document.createElement('div');
            card.className = 'albaran-card';
            
            card.innerHTML = `
                <div class="albaran-header">
                    <div class="albaran-number">📄 ${escapeHtml(albaran.number)}</div>
                </div>
                <div class="albaran-details">
                    <div class="albaran-date">📅 ${formatDate(albaran.date)}</div>
                    <div class="albaran-amount">💰 ${formatCurrency(albaran.amount)}</div>
                </div>
                ${albaran.notes ? `<div class="albaran-notes">${escapeHtml(albaran.notes)}</div>` : ''}
                <div class="albaran-actions">
                    <button class="action-btn edit" data-id="${albaran.id}">✏️</button>
                    <button class="action-btn delete" data-id="${albaran.id}">🗑️</button>
                </div>
            `;
            
            albaranesGrid.appendChild(card);
        });
    });
    
    if (albaranesCount) {
        const count = filteredAlbaranes.length;
        const totalCount = inventoryData.albaranes ? inventoryData.albaranes.length : 0;
        if (count === totalCount) {
            albaranesCount.textContent = `${count} ${t('albaranes')}`;
        } else {
            albaranesCount.textContent = `${count} / ${totalCount} ${t('albaranes')}`;
        }
    }
    
    // Add event listeners
    document.querySelectorAll('.albaran-card .action-btn.edit').forEach(btn => {
        btn.addEventListener('click', () => openEditAlbaranModal(btn.dataset.id));
    });
    
    document.querySelectorAll('.albaran-card .action-btn.delete').forEach(btn => {
        btn.addEventListener('click', () => openDeleteModal('albaran', btn.dataset.id));
    });
}

function formatCurrency(amount) {
    return new Intl.NumberFormat(currentLang === 'es' ? 'es-ES' : 'en-US', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
}

function openAddAlbaranModal() {
    editingAlbaranId = null;
    if (albaranModalTitle) albaranModalTitle.textContent = t('addAlbaran');
    if (albaranForm) albaranForm.reset();
    
    // Set default date to today
    if (albaranDateInput) {
        const today = new Date().toISOString().split('T')[0];
        albaranDateInput.value = today;
    }
    
    openModal(albaranModal);
    if (albaranCompanyInput) albaranCompanyInput.focus();
}

function openEditAlbaranModal(albaranId) {
    editingAlbaranId = albaranId;
    const albaran = inventoryData.albaranes.find(a => a.id === albaranId);
    if (!albaran) return;
    
    if (albaranModalTitle) albaranModalTitle.textContent = t('editAlbaran');
    if (albaranCompanyInput) albaranCompanyInput.value = albaran.company;
    if (albaranNumberInput) albaranNumberInput.value = albaran.number;
    if (albaranDateInput) albaranDateInput.value = albaran.date;
    if (albaranAmountInput) albaranAmountInput.value = albaran.amount;
    if (albaranNotesInput) albaranNotesInput.value = albaran.notes || '';
    
    openModal(albaranModal);
    if (albaranCompanyInput) albaranCompanyInput.focus();
}

function saveAlbaran() {
    const company = albaranCompanyInput ? albaranCompanyInput.value.trim() : '';
    const number = albaranNumberInput ? albaranNumberInput.value.trim() : '';
    const date = albaranDateInput ? albaranDateInput.value : '';
    const amount = albaranAmountInput ? parseFloat(albaranAmountInput.value) : 0;
    const notes = albaranNotesInput ? albaranNotesInput.value.trim() : '';
    
    if (!company || !number || !date || amount < 0) {
        alert(t('fillAllFields'));
        return;
    }
    
    if (!isFinite(amount) || amount < 0) {
        alert(t('invalidNumber'));
        return;
    }
    
    if (!inventoryData.albaranes) inventoryData.albaranes = [];
    
    if (editingAlbaranId) {
        const albaran = inventoryData.albaranes.find(a => a.id === editingAlbaranId);
        if (albaran) {
            albaran.company = company;
            albaran.number = number;
            albaran.date = date;
            albaran.amount = amount;
            albaran.notes = notes;
        }
    } else {
        inventoryData.albaranes.push({
            id: generateId(),
            company,
            number,
            date,
            amount,
            notes
        });
    }
    
    saveData();
    closeModal(albaranModal);
    renderAlbaranes();
}

// ===== Scanner Functions =====
function openScannerModal() {
    if (!scannerModal) return;
    
    openModal(scannerModal);
    startScanner();
}

function closeScannerModalFunc() {
    stopScanner();
    closeModal(scannerModal);
}

function startScanner() {
    if (!scannerVideo || !scannerCanvas) return;
    
    // Check if ZXing is available
    if (typeof ZXing === 'undefined' || !ZXing.BrowserMultiFormatReader) {
        if (scannerStatus) scannerStatus.textContent = t('scanError') + ' (Library not loaded)';
        alert('Barcode scanning library not loaded. Please refresh the page.');
        return;
    }
    
    // Initialize code reader
    try {
        codeReader = new ZXing.BrowserMultiFormatReader();
    } catch (e) {
        console.error('Error initializing ZXing:', e);
        if (scannerStatus) scannerStatus.textContent = t('scanError');
        return;
    }
    
    // Request camera access
    navigator.mediaDevices.getUserMedia({ 
        video: { 
            facingMode: 'environment', // Use back camera on mobile
            width: { ideal: 1280 },
            height: { ideal: 720 }
        } 
    })
    .then(stream => {
        scannerStream = stream;
        scannerVideo.srcObject = stream;
        scannerVideo.play();
        
        if (scannerStatus) scannerStatus.textContent = t('scannerReady');
        
        // Start scanning
        scanForBarcode();
    })
    .catch(error => {
        console.error('Camera access error:', error);
        if (scannerStatus) scannerStatus.textContent = t('noCamera');
        alert(t('noCamera'));
    });
}

function scanForBarcode() {
    if (!scannerVideo || !scannerCanvas || !codeReader) return;
    
    const width = scannerVideo.videoWidth;
    const height = scannerVideo.videoHeight;
    
    if (width === 0 || height === 0) {
        // Video not ready yet, try again
        setTimeout(scanForBarcode, 100);
        return;
    }
    
    scannerCanvas.width = width;
    scannerCanvas.height = height;
    
    const context = scannerCanvas.getContext('2d');
    
    // Draw current frame to canvas
    context.drawImage(scannerVideo, 0, 0, width, height);
    
    // Try to decode barcode using ZXing
    try {
        const imageData = context.getImageData(0, 0, width, height);
        
        // Use ZXing's decodeFromImageData method
        codeReader.decodeFromImageData(imageData)
            .then(result => {
                if (result && result.getText) {
                    const scannedText = result.getText();
                    console.log('Scanned:', scannedText);
                    
                    // Stop scanning
                    stopScanner();
                    
                    // Parse and fill form
                    parseScannedData(scannedText);
                } else {
                    // Continue scanning
                    requestAnimationFrame(scanForBarcode);
                }
            })
            .catch(() => {
                // No barcode found, continue scanning
                requestAnimationFrame(scanForBarcode);
            });
    } catch (e) {
        // Error, continue scanning
        requestAnimationFrame(scanForBarcode);
    }
}

function parseScannedData(data) {
    if (!data) return;
    
    if (scannerStatus) scannerStatus.textContent = t('parsingData');
    
    try {
        // Try to parse as JSON first
        let parsed = null;
        try {
            parsed = JSON.parse(data);
        } catch (e) {
            // Not JSON, try other formats
        }
        
        if (parsed && typeof parsed === 'object') {
            // JSON format: { company, number, date, amount, notes }
            if (albaranCompanyInput && parsed.company) albaranCompanyInput.value = parsed.company;
            if (albaranNumberInput && parsed.number) albaranNumberInput.value = parsed.number;
            if (albaranDateInput && parsed.date) albaranDateInput.value = parsed.date;
            if (albaranAmountInput && parsed.amount) albaranAmountInput.value = parsed.amount;
            if (albaranNotesInput && parsed.notes) albaranNotesInput.value = parsed.notes;
        } else {
            // Try to parse structured text formats
            // Format 1: "COMPANY|NUMBER|DATE|AMOUNT|NOTES"
            const parts = data.split('|');
            if (parts.length >= 4) {
                if (albaranCompanyInput) albaranCompanyInput.value = parts[0].trim();
                if (albaranNumberInput) albaranNumberInput.value = parts[1].trim();
                if (albaranDateInput) {
                    // Try to parse date
                    const dateStr = parts[2].trim();
                    const date = parseDateString(dateStr);
                    if (date) albaranDateInput.value = date;
                }
                if (albaranAmountInput) {
                    const amount = parseFloat(parts[3].trim());
                    if (!isNaN(amount)) albaranAmountInput.value = amount;
                }
                if (albaranNotesInput && parts[4]) albaranNotesInput.value = parts[4].trim();
            } else {
                // Format 2: Just albaran number, fill only that
                if (albaranNumberInput) albaranNumberInput.value = data.trim();
            }
        }
        
        // Set default date if not provided
        if (albaranDateInput && !albaranDateInput.value) {
            const today = new Date().toISOString().split('T')[0];
            albaranDateInput.value = today;
        }
        
        // Close scanner and open albaran modal
        closeScannerModalFunc();
        openAddAlbaranModal();
        
        if (scannerStatus) scannerStatus.textContent = t('scanSuccess');
        
    } catch (error) {
        console.error('Error parsing scanned data:', error);
        if (scannerStatus) scannerStatus.textContent = t('scanError');
    }
}

function parseDateString(dateStr) {
    // Try various date formats
    const formats = [
        /^(\d{4})-(\d{2})-(\d{2})$/, // YYYY-MM-DD
        /^(\d{2})\/(\d{2})\/(\d{4})$/, // MM/DD/YYYY
        /^(\d{2})\/(\d{2})\/(\d{2})$/, // MM/DD/YY
        /^(\d{2})-(\d{2})-(\d{4})$/, // MM-DD-YYYY
    ];
    
    for (const format of formats) {
        const match = dateStr.match(format);
        if (match) {
            if (format === formats[0]) {
                // YYYY-MM-DD
                return dateStr;
            } else if (format === formats[1] || format === formats[3]) {
                // MM/DD/YYYY or MM-DD-YYYY
                const month = match[1];
                const day = match[2];
                const year = match[3];
                return `${year}-${month}-${day}`;
            } else if (format === formats[2]) {
                // MM/DD/YY
                const month = match[1];
                const day = match[2];
                const year = '20' + match[3];
                return `${year}-${month}-${day}`;
            }
        }
    }
    
    // Try to parse as Date object
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
        return date.toISOString().split('T')[0];
    }
    
    return null;
}

function stopScanner() {
    // Stop video stream
    if (scannerStream) {
        scannerStream.getTracks().forEach(track => track.stop());
        scannerStream = null;
    }
    
    // Clear video source
    if (scannerVideo) {
        scannerVideo.srcObject = null;
    }
    
    // Reset code reader
    codeReader = null;
    
    if (scannerStatus) scannerStatus.textContent = t('scannerReady');
}

// ===== Helper Functions =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatNumber(num) {
    if (Number.isInteger(num)) {
        return num.toString();
    }
    return num.toFixed(2).replace(/\.?0+$/, '');
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });
    
    // Family events
    if (addFamilyBtn) addFamilyBtn.addEventListener('click', openAddFamilyModal);
    if (closeFamilyModal) closeFamilyModal.addEventListener('click', () => closeModal(familyModal));
    if (cancelFamilyBtn) cancelFamilyBtn.addEventListener('click', () => closeModal(familyModal));
    if (familyForm) familyForm.addEventListener('submit', (e) => { e.preventDefault(); saveFamily(); });

    // Item events
    if (addItemBtn) addItemBtn.addEventListener('click', openAddItemModal);
    if (closeItemModal) closeItemModal.addEventListener('click', () => closeModal(itemModal));
    if (cancelItemBtn) cancelItemBtn.addEventListener('click', () => closeModal(itemModal));
    if (itemForm) itemForm.addEventListener('submit', (e) => { e.preventDefault(); saveItem(); });

    // Reservation events
    if (addReservationBtn) addReservationBtn.addEventListener('click', openAddReservationModal);
    if (closeReservationModal) closeReservationModal.addEventListener('click', () => closeModal(reservationModal));
    if (cancelReservationBtn) cancelReservationBtn.addEventListener('click', () => closeModal(reservationModal));
    if (reservationForm) reservationForm.addEventListener('submit', (e) => { e.preventDefault(); saveReservation(); });

    // Albaranes events
    if (addAlbaranBtn) addAlbaranBtn.addEventListener('click', openAddAlbaranModal);
    if (closeAlbaranModal) closeAlbaranModal.addEventListener('click', () => closeModal(albaranModal));
    if (cancelAlbaranBtn) cancelAlbaranBtn.addEventListener('click', () => closeModal(albaranModal));
    if (albaranForm) albaranForm.addEventListener('submit', (e) => { e.preventDefault(); saveAlbaran(); });
    
    // Scanner events
    if (scanAlbaranBtn) scanAlbaranBtn.addEventListener('click', openScannerModal);
    if (closeScannerModal) closeScannerModal.addEventListener('click', closeScannerModalFunc);
    if (stopScannerBtn) stopScannerBtn.addEventListener('click', closeScannerModalFunc);
    
    // Date filter events
    if (albaranFromDate) albaranFromDate.addEventListener('change', () => renderAlbaranes());
    if (albaranToDate) albaranToDate.addEventListener('change', () => renderAlbaranes());
    if (resetDateFilterBtn) resetDateFilterBtn.addEventListener('click', () => {
        if (albaranFromDate) albaranFromDate.value = '';
        if (albaranToDate) albaranToDate.value = '';
        renderAlbaranes();
    });
    
    // Time period filter events
    document.querySelectorAll('.period-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPeriod = btn.dataset.period;
            renderAlbaranes();
        });
    });

    // Delete modal
    if (closeDeleteModal) closeDeleteModal.addEventListener('click', () => closeModal(deleteModal));
    if (cancelDeleteBtn) cancelDeleteBtn.addEventListener('click', () => closeModal(deleteModal));
    if (confirmDeleteBtn) confirmDeleteBtn.addEventListener('click', confirmDelete);

    // Close modals on overlay click
    [familyModal, itemModal, deleteModal, reservationModal, albaranModal].forEach(modal => {
        if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal); });
    });

    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            [familyModal, itemModal, deleteModal, reservationModal, albaranModal].forEach(modal => {
                if (modal && modal.classList.contains('active')) closeModal(modal);
            });
        }
    });

    // Cierre events
    if (addCierreBtn) addCierreBtn.addEventListener('click', saveCierre);
    if (exportCierreBtn) exportCierreBtn.addEventListener('click', exportCierreToExcel);
    if (cierreZCashInput) cierreZCashInput.addEventListener('input', calculateCierre);
    if (cierreZCardInput) cierreZCardInput.addEventListener('input', calculateCierre);
    if (realCashInput) realCashInput.addEventListener('input', calculateCierre);
    if (realCardInput) realCardInput.addEventListener('input', calculateCierre);
    
    // Other events
    if (searchInput) searchInput.addEventListener('input', renderItems);
    if (exportBtn) exportBtn.addEventListener('click', exportData);
    if (importBtn) importBtn.addEventListener('click', () => importFile && importFile.click());
    if (importFile) importFile.addEventListener('change', (e) => {
        if (e.target.files.length > 0) { importData(e.target.files[0]); e.target.value = ''; }
    });
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);
    
    // Check Data button - diagnostic tool
    const checkDataBtn = document.getElementById('checkDataBtn');
    if (checkDataBtn) {
        checkDataBtn.addEventListener('click', () => {
            console.log('🔍 Data Source Check');
            
            // Check localStorage
            const localData = localStorage.getItem(STORAGE_KEY);
            let localInfo = 'None';
            if (localData) {
                try {
                    const parsed = JSON.parse(localData);
                    const families = parsed.families?.length || 0;
                    const items = parsed.items?.length || 0;
                    localInfo = `${families} families, ${items} items`;
                } catch (e) {
                    localInfo = 'Corrupted';
                }
            }
            
            // Check current memory
            const memFamilies = inventoryData.families?.length || 0;
            const memItems = inventoryData.items?.length || 0;
            
            // Check Firebase status
            const firebaseInfo = firebaseReady ? 'Connected' : 'Not initialized';
            
            // Check rendering status
            const tableVisible = inventoryTable ? inventoryTable.style.display : 'not found';
            const tableRows = inventoryBody ? inventoryBody.children.length : 0;
            const currentFamily = currentFamilyId || 'None';
            const familyItems = currentFamilyId ? getItemsForFamily(currentFamilyId).length : 0;
            
            const message = `📊 DATA SOURCES:\n\n` +
                `🔥 Firebase: ${firebaseInfo}\n` +
                `💾 LocalStorage: ${localInfo}\n` +
                `🧠 Current Memory: ${memFamilies} families, ${memItems} items\n\n` +
                `🎨 RENDERING:\n` +
                `Selected Family: ${currentFamily}\n` +
                `Items in Family: ${familyItems}\n` +
                `Table Display: ${tableVisible}\n` +
                `Rows in Table: ${tableRows}\n\n` +
                `Tap REFRESH button to force re-render`;
            
            alert(message);
            
            console.log('📊 DETAILED DATA CHECK:');
            console.log('Firebase Ready:', firebaseReady);
            console.log('Database Object:', database);
            console.log('LocalStorage Data:', localData);
            console.log('Current inventoryData:', inventoryData);
            console.log('Current Family ID:', currentFamilyId);
            console.log('Table Element:', inventoryTable);
            console.log('Table Body Rows:', inventoryBody?.children.length);
            console.log('Items for current family:', currentFamilyId ? getItemsForFamily(currentFamilyId) : 'No family selected');
            
            // Auto-select first family if none selected
            if (!currentFamilyId && inventoryData.families.length > 0) {
                console.log('⚠️ No family selected, auto-selecting first family');
                alert('No family selected! Auto-selecting first family...');
                selectFamily(inventoryData.families[0].id);
            }
        });
    }
    
    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            console.log('🔄 Manual refresh triggered');
            refreshBtn.style.transform = 'rotate(360deg)';
            refreshBtn.style.transition = 'transform 0.5s';
            setTimeout(() => {
                refreshBtn.style.transform = 'rotate(0deg)';
            }, 500);
            
            // Reload data
            if (firebaseReady && database) {
                loadData();
            } else {
                loadFromLocalStorage();
            }
            
            // Re-render everything
            renderFamilies();
            
            // iOS fix: Delay rendering
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            if (currentFamilyId) {
                if (isIOS) {
                    setTimeout(() => {
                        renderItems();
                        renderMermaxChart();
                    }, 100);
                } else {
                    renderItems();
                    renderMermaxChart();
                }
            }
        });
    }
}

// ===== Initialize =====
// iOS viewport height fix
function setIOSViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set viewport height on load and resize (important for iOS)
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setIOSViewportHeight);
}
window.addEventListener('resize', setIOSViewportHeight);
window.addEventListener('orientationchange', setIOSViewportHeight);
setIOSViewportHeight();

// Page visibility handler (important for iOS Safari)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && inventoryData && inventoryData.families) {
        console.log('👀 Page became visible, re-rendering...');
        renderFamilies();
        if (currentFamilyId) {
            renderItems();
            renderMermaxChart();
        }
    }
});

// Page focus handler (iOS Safari)
window.addEventListener('focus', () => {
    console.log('🎯 Window focused, checking state...');
    if (inventoryData && inventoryData.families && inventoryData.families.length > 0) {
        renderFamilies();
        if (currentFamilyId) {
            renderItems();
            renderMermaxChart();
        }
    }
});

function updateLoadingStatus(message) {
    const statusEl = document.getElementById('loadingStatus');
    if (statusEl) {
        statusEl.textContent = message;
    }
    console.log('📢', message);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.3s';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 App starting...');
    updateLoadingStatus('Initializing...');
    
    // Fix iOS viewport height
    setIOSViewportHeight();
    
    // Initialize DOM elements
    updateLoadingStatus('Setting up interface...');
    initDOMElements();
    
    // Load language
    updateLoadingStatus('Loading language settings...');
    loadLanguage();
    
    // Setup event listeners
    updateLoadingStatus('Setting up controls...');
    setupEventListeners();
    
    // CHANGED: Load from localStorage FIRST (offline-first approach for iOS)
    updateLoadingStatus('Loading data...');
    const hasLocalData = loadFromLocalStorageSync();
    
    if (hasLocalData) {
        console.log('✅ Loaded from localStorage, showing app');
        updateLoadingStatus('Ready!');
        hideLoadingScreen();
    } else {
        updateLoadingStatus('No local data, initializing...');
    }
    
    // Try Firebase in background (don't block the UI)
    setTimeout(() => {
        updateLoadingStatus('Connecting to server...');
        if (initFirebase()) {
            console.log('🔥 Firebase ready, syncing data...');
            loadData();
            hideLoadingScreen();
        } else {
            console.log('📂 Firebase unavailable, using offline mode');
            if (!hasLocalData) {
                // No local data and no Firebase, initialize defaults
                initializeDefaultData();
                renderFamilies();
                if (inventoryData.families.length > 0) {
                    selectFamily(inventoryData.families[0].id);
                }
                saveToLocalStorage();
            }
            hideLoadingScreen();
        }
    }, 100); // Small delay to ensure UI is ready
});