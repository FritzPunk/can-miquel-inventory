// ===== Can Miquel Inventory Management System =====

// ===== Translations =====
const translations = {
    en: {
        // Header
        export: 'Export',
        import: 'Import',
        
        // Sidebar
        families: 'Families',
        items: 'items',
        item: 'item',
        
        // Main Panel
        selectFamily: 'Select a Family',
        addItem: 'Add Item',
        searchPlaceholder: 'Search items...',
        
        // Table Headers
        itemName: 'Item Name',
        quantity: 'Quantity',
        unit: 'Unit',
        minStock: 'Min. Stock',
        status: 'Status',
        actions: 'Actions',
        
        // Status
        inStock: 'In Stock',
        lowStock: 'Low Stock',
        outOfStock: 'Out of Stock',
        
        // Empty State
        emptyState: 'No items yet. Select a family and add your first item!',
        
        // Footer
        lastSaved: 'Last saved',
        never: 'Never',
        
        // Family Modal
        addFamily: 'Add Family',
        editFamily: 'Edit Family',
        familyName: 'Family Name',
        familyNamePlaceholder: 'e.g., Beverages, Meats, Vegetables...',
        iconEmoji: 'Icon (emoji)',
        saveFamily: 'Save Family',
        
        // Item Modal
        editItem: 'Edit Item',
        itemNameLabel: 'Item Name',
        itemNamePlaceholder: 'e.g., Olive Oil, Chicken Breast...',
        minStockLabel: 'Minimum Stock (alert threshold)',
        notesLabel: 'Notes (optional)',
        notesPlaceholder: 'Any additional notes...',
        saveItem: 'Save Item',
        
        // Units
        unitUnits: 'Units',
        unitKg: 'Kilograms (kg)',
        unitG: 'Grams (g)',
        unitL: 'Liters (L)',
        unitMl: 'Milliliters (mL)',
        unitBottles: 'Bottles',
        unitBoxes: 'Boxes',
        unitPacks: 'Packs',
        
        // Delete Modal
        confirmDelete: 'Confirm Delete',
        deleteConfirmItem: 'Are you sure you want to delete this item?',
        deleteConfirmFamily: 'Are you sure you want to delete',
        deleteConfirmFamilyItems: 'This will also delete',
        deleteConfirmFamilyItemsIn: 'in this family.',
        cancel: 'Cancel',
        delete: 'Delete',
        
        // Alerts
        enterFamilyName: 'Please enter a family name.',
        enterItemName: 'Please enter an item name.',
        importConfirm: 'This will replace your current inventory with:',
        importFamilies: 'families',
        importItems: 'items',
        importContinue: 'Continue?',
        importSuccess: 'Data imported successfully!',
        importError: 'Error importing data. Please make sure the file is a valid inventory export.',
        
        // Default families
        defaultBeverages: 'Beverages',
        defaultMeats: 'Meats',
        defaultVegetables: 'Vegetables',
        defaultDairy: 'Dairy',
        defaultPantry: 'Pantry',
        defaultSeafood: 'Seafood'
    },
    es: {
        // Header
        export: 'Exportar',
        import: 'Importar',
        
        // Sidebar
        families: 'Familias',
        items: 'artículos',
        item: 'artículo',
        
        // Main Panel
        selectFamily: 'Selecciona una Familia',
        addItem: 'Añadir Artículo',
        searchPlaceholder: 'Buscar artículos...',
        
        // Table Headers
        itemName: 'Nombre',
        quantity: 'Cantidad',
        unit: 'Unidad',
        minStock: 'Stock Mín.',
        status: 'Estado',
        actions: 'Acciones',
        
        // Status
        inStock: 'En Stock',
        lowStock: 'Stock Bajo',
        outOfStock: 'Agotado',
        
        // Empty State
        emptyState: 'Sin artículos. ¡Selecciona una familia y añade tu primer artículo!',
        
        // Footer
        lastSaved: 'Guardado',
        never: 'Nunca',
        
        // Family Modal
        addFamily: 'Añadir Familia',
        editFamily: 'Editar Familia',
        familyName: 'Nombre de Familia',
        familyNamePlaceholder: 'ej., Bebidas, Carnes, Verduras...',
        iconEmoji: 'Icono (emoji)',
        saveFamily: 'Guardar Familia',
        
        // Item Modal
        editItem: 'Editar Artículo',
        itemNameLabel: 'Nombre del Artículo',
        itemNamePlaceholder: 'ej., Aceite de Oliva, Pechuga de Pollo...',
        minStockLabel: 'Stock Mínimo (umbral de alerta)',
        notesLabel: 'Notas (opcional)',
        notesPlaceholder: 'Notas adicionales...',
        saveItem: 'Guardar Artículo',
        
        // Units
        unitUnits: 'Unidades',
        unitKg: 'Kilogramos (kg)',
        unitG: 'Gramos (g)',
        unitL: 'Litros (L)',
        unitMl: 'Mililitros (mL)',
        unitBottles: 'Botellas',
        unitBoxes: 'Cajas',
        unitPacks: 'Paquetes',
        
        // Delete Modal
        confirmDelete: 'Confirmar Eliminación',
        deleteConfirmItem: '¿Estás seguro de que quieres eliminar este artículo?',
        deleteConfirmFamily: '¿Estás seguro de que quieres eliminar',
        deleteConfirmFamilyItems: 'Esto también eliminará',
        deleteConfirmFamilyItemsIn: 'en esta familia.',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        
        // Alerts
        enterFamilyName: 'Por favor, introduce un nombre de familia.',
        enterItemName: 'Por favor, introduce un nombre de artículo.',
        importConfirm: 'Esto reemplazará tu inventario actual con:',
        importFamilies: 'familias',
        importItems: 'artículos',
        importContinue: '¿Continuar?',
        importSuccess: '¡Datos importados correctamente!',
        importError: 'Error al importar datos. Asegúrate de que el archivo es una exportación válida.',
        
        // Default families
        defaultBeverages: 'Bebidas',
        defaultMeats: 'Carnes',
        defaultVegetables: 'Verduras',
        defaultDairy: 'Lácteos',
        defaultPantry: 'Despensa',
        defaultSeafood: 'Mariscos'
    }
};

let currentLang = 'en';

// Data Structure
let inventoryData = {
    families: [],
    items: []
};

let currentFamilyId = null;
let editingFamilyId = null;
let editingItemId = null;
let deleteTarget = null;

// DOM Elements
const familyNav = document.getElementById('familyNav');
const inventoryBody = document.getElementById('inventoryBody');
const currentFamilyName = document.getElementById('currentFamilyName');
const itemCount = document.getElementById('itemCount');
const addItemBtn = document.getElementById('addItemBtn');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');
const inventoryTable = document.getElementById('inventoryTable');
const lastSavedSpan = document.getElementById('lastSaved');

// Family Modal
const familyModal = document.getElementById('familyModal');
const familyModalTitle = document.getElementById('familyModalTitle');
const familyForm = document.getElementById('familyForm');
const familyNameInput = document.getElementById('familyName');
const familyIconInput = document.getElementById('familyIcon');
const addFamilyBtn = document.getElementById('addFamilyBtn');
const closeFamilyModal = document.getElementById('closeFamilyModal');
const cancelFamilyBtn = document.getElementById('cancelFamilyBtn');

// Item Modal
const itemModal = document.getElementById('itemModal');
const itemModalTitle = document.getElementById('itemModalTitle');
const itemForm = document.getElementById('itemForm');
const itemNameInput = document.getElementById('itemName');
const itemQuantityInput = document.getElementById('itemQuantity');
const itemUnitInput = document.getElementById('itemUnit');
const itemMinStockInput = document.getElementById('itemMinStock');
const itemNotesInput = document.getElementById('itemNotes');
const closeItemModal = document.getElementById('closeItemModal');
const cancelItemBtn = document.getElementById('cancelItemBtn');

// Delete Modal
const deleteModal = document.getElementById('deleteModal');
const deleteMessage = document.getElementById('deleteMessage');
const closeDeleteModal = document.getElementById('closeDeleteModal');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

// Export/Import
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');

// Language Toggle
const langToggle = document.getElementById('langToggle');
const langFlag = document.getElementById('langFlag');
const langCode = document.getElementById('langCode');

// ===== Translation Functions =====
function t(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

function applyTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    
    // Update all placeholders with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
    
    // Update language toggle button
    if (currentLang === 'en') {
        langFlag.textContent = '🇬🇧';
        langCode.textContent = 'EN';
    } else {
        langFlag.textContent = '🇪🇸';
        langCode.textContent = 'ES';
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('canMiquelLang', currentLang);
    applyTranslations();
    
    // Re-render dynamic content
    renderFamilies();
    renderItems();
    updateItemCount();
    
    // Update current family name if selected
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

// ===== Local Storage Functions =====
const STORAGE_KEY = 'canMiquelInventory';

function saveData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(inventoryData));
        updateLastSaved();
    } catch (error) {
        console.error('Error saving data:', error);
        alert('Error saving data. Please check your browser storage settings.');
    }
}

function loadData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            inventoryData = JSON.parse(saved);
            // Migrate old data: convert hardcoded English names to translation keys
            migrateDefaultFamilies();
        } else {
            // Initialize with default families for a restaurant
            inventoryData = {
                families: [
                    { id: generateId(), nameKey: 'defaultBeverages', icon: '🍷' },
                    { id: generateId(), nameKey: 'defaultMeats', icon: '🥩' },
                    { id: generateId(), nameKey: 'defaultVegetables', icon: '🥬' },
                    { id: generateId(), nameKey: 'defaultDairy', icon: '🧀' },
                    { id: generateId(), nameKey: 'defaultPantry', icon: '🫒' },
                    { id: generateId(), nameKey: 'defaultSeafood', icon: '🦐' }
                ],
                items: []
            };
            saveData();
        }
    } catch (error) {
        console.error('Error loading data:', error);
        inventoryData = { families: [], items: [] };
    }
}

// Migrate old default families with hardcoded names to use translation keys
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

// Get family display name (translated if it's a default family)
function getFamilyName(family) {
    if (family.nameKey && translations[currentLang][family.nameKey]) {
        return translations[currentLang][family.nameKey];
    }
    return family.name || '';
}

function updateLastSaved() {
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit',
        day: '2-digit',
        month: 'short'
    };
    lastSavedSpan.textContent = now.toLocaleDateString('en-GB', options);
}

// ===== Utility Functions =====
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getItemsForFamily(familyId) {
    return inventoryData.items.filter(item => item.familyId === familyId);
}

function getItemStatus(item) {
    if (item.minStock === null || item.minStock === undefined || item.minStock === 0) {
        return 'ok';
    }
    if (item.quantity <= 0) {
        return 'critical';
    }
    if (item.quantity <= item.minStock) {
        return 'low';
    }
    return 'ok';
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
    familyNav.innerHTML = '';
    
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
    
    // Add event listeners for edit/delete buttons
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
    if (!currentFamilyId) {
        inventoryBody.innerHTML = '';
        emptyState.classList.add('visible');
        inventoryTable.style.display = 'none';
        return;
    }
    
    let items = getItemsForFamily(currentFamilyId);
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase().trim();
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
    
    inventoryBody.innerHTML = '';
    items.forEach((item, index) => {
        const status = getItemStatus(item);
        const row = document.createElement('tr');
        row.style.animationDelay = `${index * 0.03}s`;
        row.innerHTML = `
            <td>
                <div class="item-name">${escapeHtml(item.name)}</div>
                ${item.notes ? `<div class="item-notes">${escapeHtml(item.notes)}</div>` : ''}
            </td>
            <td class="quantity-cell">${formatNumber(item.quantity)}</td>
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
    
    // Add event listeners
    document.querySelectorAll('.action-btn.edit').forEach(btn => {
        btn.addEventListener('click', () => openEditItemModal(btn.dataset.id));
    });
    
    document.querySelectorAll('.action-btn.delete').forEach(btn => {
        btn.addEventListener('click', () => openDeleteModal('item', btn.dataset.id));
    });
}

function selectFamily(familyId) {
    currentFamilyId = familyId;
    const family = inventoryData.families.find(f => f.id === familyId);
    
    if (family) {
        const displayName = getFamilyName(family);
        currentFamilyName.textContent = `${family.icon || '📦'} ${displayName}`;
        addItemBtn.disabled = false;
        
        const items = getItemsForFamily(familyId);
        const itemWord = items.length !== 1 ? t('items') : t('item');
        itemCount.textContent = `${items.length} ${itemWord}`;
    }
    
    renderFamilies();
    renderItems();
}

function updateItemCount() {
    if (currentFamilyId) {
        const items = getItemsForFamily(currentFamilyId);
        const itemWord = items.length !== 1 ? t('items') : t('item');
        itemCount.textContent = `${items.length} ${itemWord}`;
    }
}

// ===== Modal Functions =====
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function openAddFamilyModal() {
    editingFamilyId = null;
    familyModalTitle.textContent = t('addFamily');
    familyForm.reset();
    openModal(familyModal);
    familyNameInput.focus();
}

function openEditFamilyModal(familyId) {
    editingFamilyId = familyId;
    const family = inventoryData.families.find(f => f.id === familyId);
    if (!family) return;
    
    familyModalTitle.textContent = t('editFamily');
    familyNameInput.value = getFamilyName(family);
    familyIconInput.value = family.icon || '';
    openModal(familyModal);
    familyNameInput.focus();
}

function openAddItemModal() {
    if (!currentFamilyId) return;
    
    editingItemId = null;
    itemModalTitle.textContent = t('addItem');
    itemForm.reset();
    openModal(itemModal);
    itemNameInput.focus();
}

function openEditItemModal(itemId) {
    editingItemId = itemId;
    const item = inventoryData.items.find(i => i.id === itemId);
    if (!item) return;
    
    itemModalTitle.textContent = t('editItem');
    itemNameInput.value = item.name;
    itemQuantityInput.value = item.quantity;
    itemUnitInput.value = item.unit;
    itemMinStockInput.value = item.minStock || '';
    itemNotesInput.value = item.notes || '';
    openModal(itemModal);
    itemNameInput.focus();
}

function openDeleteModal(type, id) {
    deleteTarget = { type, id };
    
    if (type === 'family') {
        const family = inventoryData.families.find(f => f.id === id);
        const displayName = getFamilyName(family);
        const itemsCount = getItemsForFamily(id).length;
        const itemWord = itemsCount !== 1 ? t('items') : t('item');
        deleteMessage.innerHTML = `${t('deleteConfirmFamily')} <strong>${escapeHtml(displayName)}</strong>?${itemsCount > 0 ? `<br><br>${t('deleteConfirmFamilyItems')} <strong>${itemsCount} ${itemWord}</strong> ${t('deleteConfirmFamilyItemsIn')}` : ''}`;
    } else {
        const item = inventoryData.items.find(i => i.id === id);
        deleteMessage.innerHTML = `${t('deleteConfirmFamily')} <strong>${escapeHtml(item.name)}</strong>?`;
    }
    
    openModal(deleteModal);
}

// ===== CRUD Operations =====
function saveFamily() {
    const name = familyNameInput.value.trim();
    const icon = familyIconInput.value.trim() || '📦';
    
    if (!name) {
        alert(t('enterFamilyName'));
        return;
    }
    
    if (editingFamilyId) {
        // Update existing
        const family = inventoryData.families.find(f => f.id === editingFamilyId);
        if (family) {
            // If editing, convert to custom name (remove translation key)
            delete family.nameKey;
            family.name = name;
            family.icon = icon;
        }
    } else {
        // Create new
        inventoryData.families.push({
            id: generateId(),
            name,
            icon
        });
    }
    
    saveData();
    closeModal(familyModal);
    renderFamilies();
    
    // Update header if current family was edited
    if (editingFamilyId === currentFamilyId) {
        const family = inventoryData.families.find(f => f.id === currentFamilyId);
        if (family) {
            currentFamilyName.textContent = `${family.icon || '📦'} ${family.name}`;
        }
    }
}

function saveItem() {
    const name = itemNameInput.value.trim();
    const quantity = parseFloat(itemQuantityInput.value) || 0;
    const unit = itemUnitInput.value;
    const minStock = parseFloat(itemMinStockInput.value) || 0;
    const notes = itemNotesInput.value.trim();
    
    if (!name) {
        alert(t('enterItemName'));
        return;
    }
    
    if (editingItemId) {
        // Update existing
        const item = inventoryData.items.find(i => i.id === editingItemId);
        if (item) {
            item.name = name;
            item.quantity = quantity;
            item.unit = unit;
            item.minStock = minStock;
            item.notes = notes;
        }
    } else {
        // Create new
        inventoryData.items.push({
            id: generateId(),
            familyId: currentFamilyId,
            name,
            quantity,
            unit,
            minStock,
            notes
        });
    }
    
    saveData();
    closeModal(itemModal);
    renderItems();
    updateItemCount();
    renderFamilies(); // Update item count in sidebar
}

function confirmDelete() {
    if (!deleteTarget) return;
    
    if (deleteTarget.type === 'family') {
        // Remove all items in this family
        inventoryData.items = inventoryData.items.filter(item => item.familyId !== deleteTarget.id);
        // Remove the family
        inventoryData.families = inventoryData.families.filter(f => f.id !== deleteTarget.id);
        
        // Reset current selection if deleted
        if (currentFamilyId === deleteTarget.id) {
            currentFamilyId = null;
            currentFamilyName.textContent = t('selectFamily');
            itemCount.textContent = `0 ${t('items')}`;
            addItemBtn.disabled = true;
        }
    } else {
        // Remove the item
        inventoryData.items = inventoryData.items.filter(i => i.id !== deleteTarget.id);
    }
    
    saveData();
    closeModal(deleteModal);
    renderFamilies();
    renderItems();
    updateItemCount();
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
            
            // Validate structure
            if (!data.families || !Array.isArray(data.families) || 
                !data.items || !Array.isArray(data.items)) {
                throw new Error('Invalid data format');
            }
            
            // Confirm import
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
                currentFamilyName.textContent = t('selectFamily');
                itemCount.textContent = `0 ${t('items')}`;
                addItemBtn.disabled = true;
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
// Family Modal
addFamilyBtn.addEventListener('click', openAddFamilyModal);
closeFamilyModal.addEventListener('click', () => closeModal(familyModal));
cancelFamilyBtn.addEventListener('click', () => closeModal(familyModal));
familyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveFamily();
});

// Item Modal
addItemBtn.addEventListener('click', openAddItemModal);
closeItemModal.addEventListener('click', () => closeModal(itemModal));
cancelItemBtn.addEventListener('click', () => closeModal(itemModal));
itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveItem();
});

// Delete Modal
closeDeleteModal.addEventListener('click', () => closeModal(deleteModal));
cancelDeleteBtn.addEventListener('click', () => closeModal(deleteModal));
confirmDeleteBtn.addEventListener('click', confirmDelete);

// Close modals on overlay click
[familyModal, itemModal, deleteModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        [familyModal, itemModal, deleteModal].forEach(modal => {
            if (modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    }
});

// Search
searchInput.addEventListener('input', renderItems);

// Export/Import
exportBtn.addEventListener('click', exportData);
importBtn.addEventListener('click', () => importFile.click());
importFile.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        importData(e.target.files[0]);
        e.target.value = ''; // Reset input
    }
});

// Language toggle event
langToggle.addEventListener('click', toggleLanguage);

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    loadLanguage();
    loadData();
    renderFamilies();
    renderItems();
    
    // Auto-select first family if available
    if (inventoryData.families.length > 0) {
        selectFamily(inventoryData.families[0].id);
    }
});

