// ============================================
// CUSTOMIZE YOUR GAME DATA HERE
// ============================================

const gameData = {
    // Level 1: Memory Match
    level1: {
        question: "How many cocktails did each one of us have on our first \"date\"?",
        options: [
            "2",
            "2 by you and 3 by me",
            "3",
            "Roti aur daaru ki glass ginte nahi"
        ],
        correctAnswer: 2, // Index of correct answer (2 = third option)
        photo: "images/shared image (4).jpeg", // Replace with your photo URL
        loveNote: "I'll never forget how nervous I was, but you being the fun little bundle of joy that you are made me enjoy so mucchhhh. That day, I knew you were special. 💕"
    },
    
    // Level 2: Photo Reveal Puzzle
    level2: {
        question: "What were you doing in this photo?",
        options: [
            "Picking at one of your wounds 😭",
            "Laughing off in the rain 🌦️",
            "Gussa gussi on phone  🤬",
            "Trying to find a QR menu at a restaurant 🍝"
        ],
        correctAnswer: 1, // Index of correct answer
        blurredPhoto: "images/shared image.jpeg", // Blurred version
        photo: "images/shared image (2).jpeg", // Clear version after correct answer
        loveNote: "This was one of those days when I truly felt content and satisfied with life. A cute mid-afternoon date while cheering you and the weather up! Will never, ever let you be sad my cutu!! 😊"
    },
    
    // Level 3: Timeline Challenge (Drag & Drop)
    level3: {
        // Array of events in CORRECT chronological order
        events: [
            {
                text: "Both of us got graduated",
                date: "25th August 2025",
                photo: "images/shared image (10).jpeg"
            },
            {
                text: "Went to the temple together for the first time",
                date: "7th September 2025",
                photo: "images/shared image (7).jpeg"
            },
            {
                text: "Went out on a cute late-night date, almost seen by your colony's aunties",
                date: "12th September 2025",
                photo: "images/shared image (8).jpeg"
            },
            {
                text: "You moved into our home ",
                date: "3rd October 2025",
                photo: "images/shared image (5).jpeg"
            },
            {
                text: "Celebrated our first Diwali together",
                date: "20th October 2025",
                photo: "images/shared image (6).jpeg"
            }
        ],
        loveNote: "Every moment with you is a treasure. From the day we met to now, you've filled my life with joy, laughter, and endless love. May we never run out of such cute mastis and happy times! 🥰💕"
    },
    
    // Level 4: Photo Reveal Puzzle 2nd
    level4: {
        question: "What were you doing in this photo?",
        options: [
            "Stuffing Lotte Choco Pie in your small mouth",
            "Showing me your latest Nykaa haul",
            "Looking like an extra-terrestrial cutie because of some new face mask",
            "Giving passionate gaalis to our cook for the food he made"
        ],
        correctAnswer: 0, // Index of correct answer
        blurredPhoto: "images/shared image (3).jpeg", // Blurred version
        photo: "images/shared image (1).jpeg", // Clear version after correct answer
        loveNote: "These little moments with you are what I cherish the most. Your silly antics, your cute expressions - everything about you makes me fall for you more each day! 🥰💕"
    },
    
    // Level 5: Multi-select question (Food & Makeup leads to gifts)
    // Restaurant: Shang Palace at Shangri-La Hotel, 2:15 PM
    // Gift Card: ₹7251 (from birthdays 15th March + 27th April = 15 27 → 7251)
    giftCardNumber: "6002940044109744", // Replace with actual card number
    giftCardPin: "XXXXXX" // Replace with actual PIN
};

// ============================================
// GAME LOGIC (You can leave this as is)
// ============================================

let currentLevel = 0;

// Initialize floating hearts
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['💕', '💖', '💗', '💝', '💘', '❤️'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 8000);
    }, 800);
}

// Initialize mascots
function createMascots() {
    const container = document.getElementById('mascotContainer');
    const animations = ['bounce', 'peek', 'float', 'jump'];
    const positions = [
        { bottom: '10%', left: '5%' },
        { top: '15%', right: '8%' },
        { bottom: '20%', right: '10%' },
        { top: '40%', left: '3%' }
    ];
    
    // Create 2-3 mascots at random positions
    const numMascots = 2 + Math.floor(Math.random() * 2); // 2 or 3 mascots
    
    for (let i = 0; i < numMascots; i++) {
        const mascot = document.createElement('div');
        mascot.className = 'mascot ' + animations[i % animations.length];
        
        const img = document.createElement('img');
        img.src = 'images/jigglypuff.jpeg';
        img.alt = 'Mascot';
        
        mascot.appendChild(img);
        
        // Set random position
        const pos = positions[i % positions.length];
        Object.keys(pos).forEach(key => {
            mascot.style[key] = pos[key];
        });
        
        // Add random delay to animation
        mascot.style.animationDelay = (Math.random() * 2) + 's';
        
        container.appendChild(mascot);
    }
}

// Spawn a temporary mascot (for special moments like correct answers)
function spawnCelebrationMascot() {
    const container = document.getElementById('mascotContainer');
    const mascot = document.createElement('div');
    mascot.className = 'mascot jump';
    
    const img = document.createElement('img');
    img.src = 'images/jigglypuff.jpeg';
    img.alt = 'Celebration Mascot';
    
    mascot.appendChild(img);
    mascot.style.bottom = '5%';
    mascot.style.left = '50%';
    mascot.style.transform = 'translateX(-50%)';
    
    container.appendChild(mascot);
    
    // Remove after animation
    setTimeout(() => mascot.remove(), 3000);
}

// Start game
function startGame() {
    switchScreen('welcomeScreen', 'level1');
    setupLevel1();
    
    // Start background music
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3; // Set volume to 30%
    bgMusic.play().catch(err => console.log('Audio autoplay prevented:', err));
    musicPlaying = true;
    document.getElementById('musicToggle').textContent = '🔊';
}

// Switch between screens
function switchScreen(fromId, toId) {
    document.getElementById(fromId).classList.remove('active');
    document.getElementById(toId).classList.add('active');
}

// Setup Level 1: Memory Match
function setupLevel1() {
    const data = gameData.level1;
    document.getElementById('question1').textContent = data.question;
    
    const optionsContainer = document.getElementById('options1');
    optionsContainer.innerHTML = '';
    
    data.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(1, index, data.correctAnswer);
        optionsContainer.appendChild(btn);
    });
}

// Setup Level 2: Photo Reveal Puzzle
function setupLevel2() {
    const data = gameData.level2;
    document.getElementById('blurredPhoto').src = data.blurredPhoto;
    document.getElementById('question2').textContent = data.question;
    
    const optionsContainer = document.getElementById('options2');
    optionsContainer.innerHTML = '';
    
    data.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(2, index, data.correctAnswer);
        optionsContainer.appendChild(btn);
    });
}

// Setup Level 4: Photo Reveal Puzzle 2
function setupLevel4() {
    const data = gameData.level4;
    document.getElementById('blurredPhoto2').src = data.blurredPhoto;
    document.getElementById('question4').textContent = data.question;
    
    const optionsContainer = document.getElementById('options4');
    optionsContainer.innerHTML = '';
    
    data.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(4, index, data.correctAnswer);
        optionsContainer.appendChild(btn);
    });
}

// Setup Level 3: Timeline Challenge (Drag & Drop)
let timelineState = {
    slots: [],
    correctOrder: []
};

function setupLevel3() {
    const data = gameData.level3;
    const events = data.events;
    
    // Store correct order
    timelineState.correctOrder = events.map((e, i) => i);
    timelineState.slots = new Array(events.length).fill(null);
    
    // Create timeline slots
    const slotsContainer = document.getElementById('timelineSlots');
    slotsContainer.innerHTML = '';
    
    events.forEach((event, index) => {
        const slot = document.createElement('div');
        slot.className = 'timeline-slot';
        slot.dataset.slotIndex = index;
        
        const slotNumber = document.createElement('div');
        slotNumber.className = 'slot-number';
        slotNumber.textContent = index + 1;
        
        const slotContent = document.createElement('div');
        slotContent.className = 'slot-content';
        slotContent.textContent = 'Drop event here...';
        slotContent.dataset.slotIndex = index;
        
        // Drag & drop event listeners
        slotContent.addEventListener('dragover', handleDragOver);
        slotContent.addEventListener('drop', handleDrop);
        slotContent.addEventListener('dragleave', handleDragLeave);
        
        slot.appendChild(slotNumber);
        slot.appendChild(slotContent);
        slotsContainer.appendChild(slot);
    });
    
    // Create shuffled event cards
    const eventsPool = document.getElementById('eventsPool');
    eventsPool.innerHTML = '';
    
    // Shuffle events
    const shuffledEvents = [...events].map((e, i) => ({ ...e, originalIndex: i }))
        .sort(() => Math.random() - 0.5);
    
    shuffledEvents.forEach((event) => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.draggable = true;
        card.dataset.eventIndex = event.originalIndex;
        
        const eventText = document.createElement('div');
        eventText.className = 'event-text';
        eventText.textContent = event.text;
        
        // Date removed from draggable cards to increase difficulty
        // Dates will only show in the final reveal
        
        card.appendChild(eventText);
        
        // Drag event listeners
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        
        // Touch event listeners for mobile
        card.addEventListener('touchstart', handleTouchStart, { passive: false });
        card.addEventListener('touchmove', handleTouchMove, { passive: false });
        card.addEventListener('touchend', handleTouchEnd, { passive: false });
        
        eventsPool.appendChild(card);
    });
}

// Drag and drop handlers
let draggedElement = null;
let touchDragElement = null;
let touchClone = null;
let autoScrollInterval = null;

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    stopAutoScroll();
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    e.target.classList.add('drag-over');
    return false;
}

function handleDragLeave(e) {
    e.target.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    e.preventDefault();
    
    const slotContent = e.target;
    slotContent.classList.remove('drag-over');
    
    if (draggedElement && slotContent.classList.contains('slot-content')) {
        const slotIndex = parseInt(slotContent.dataset.slotIndex);
        const eventIndex = parseInt(draggedElement.dataset.eventIndex);
        
        // Check if slot already has an event
        if (timelineState.slots[slotIndex] !== null) {
            // Return old event to pool
            const oldEventIndex = timelineState.slots[slotIndex];
            const oldCard = createEventCard(oldEventIndex);
            document.getElementById('eventsPool').appendChild(oldCard);
        }
        
        // Place new event in slot
        timelineState.slots[slotIndex] = eventIndex;
        slotContent.innerHTML = draggedElement.innerHTML;
        slotContent.style.color = '#333';
        slotContent.style.fontStyle = 'normal';
        slotContent.style.border = '2px solid #90EE90';
        slotContent.style.cursor = 'pointer';
        slotContent.parentElement.classList.add('filled');
        
        // Make slot content clickable to remove
        slotContent.onclick = () => removeEventFromSlot(slotIndex);
        
        // Add visual hint
        slotContent.title = 'Click to remove and rearrange';
        
        // Remove card from pool
        draggedElement.remove();
        draggedElement = null;
    }
    
    return false;
}

function createEventCard(eventIndex) {
    const event = gameData.level3.events[eventIndex];
    const card = document.createElement('div');
    card.className = 'event-card';
    card.draggable = true;
    card.dataset.eventIndex = eventIndex;
    
    const eventText = document.createElement('div');
    eventText.className = 'event-text';
    eventText.textContent = event.text;
    
    // Date removed from draggable cards to increase difficulty
    // Dates will only show in the final reveal
    
    card.appendChild(eventText);
    
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
    
    // Add touch events for mobile
    card.addEventListener('touchstart', handleTouchStart, { passive: false });
    card.addEventListener('touchmove', handleTouchMove, { passive: false });
    card.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    return card;
}

// Touch event handlers for mobile drag-and-drop
function handleTouchStart(e) {
    touchDragElement = e.target.closest('.event-card');
    if (!touchDragElement) return;
    
    e.preventDefault();
    touchDragElement.classList.add('dragging');
    
    // Create a visual clone that follows the finger
    touchClone = touchDragElement.cloneNode(true);
    touchClone.style.position = 'fixed';
    touchClone.style.zIndex = '10000';
    touchClone.style.pointerEvents = 'none';
    touchClone.style.opacity = '0.8';
    touchClone.style.width = touchDragElement.offsetWidth + 'px';
    document.body.appendChild(touchClone);
    
    const touch = e.touches[0];
    touchClone.style.left = (touch.clientX - touchDragElement.offsetWidth / 2) + 'px';
    touchClone.style.top = (touch.clientY - 40) + 'px';
}

function handleTouchMove(e) {
    if (!touchDragElement || !touchClone) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    
    // Move the clone with the finger
    touchClone.style.left = (touch.clientX - touchDragElement.offsetWidth / 2) + 'px';
    touchClone.style.top = (touch.clientY - 40) + 'px';
    
    // Auto-scroll when near edges
    const scrollThreshold = 100; // Reduced to 100px for balanced sensitivity
    const scrollSpeed = 12; // Reduced to 12 for moderate scroll speed
    
    if (touch.clientY < scrollThreshold) {
        // Near top - scroll up
        startAutoScroll(-scrollSpeed);
    } else if (touch.clientY > window.innerHeight - scrollThreshold) {
        // Near bottom - scroll down
        startAutoScroll(scrollSpeed);
    } else {
        stopAutoScroll();
    }
    
    // Highlight drop zones
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const slotContent = elementBelow?.closest('.slot-content');
    
    // Remove all drag-over classes
    document.querySelectorAll('.slot-content').forEach(slot => {
        slot.classList.remove('drag-over');
    });
    
    // Add drag-over to current slot
    if (slotContent) {
        slotContent.classList.add('drag-over');
    }
}

function handleTouchEnd(e) {
    if (!touchDragElement || !touchClone) return;
    
    e.preventDefault();
    stopAutoScroll();
    
    const touch = e.changedTouches[0];
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const slotContent = elementBelow?.closest('.slot-content');
    
    // Remove drag-over classes
    document.querySelectorAll('.slot-content').forEach(slot => {
        slot.classList.remove('drag-over');
    });
    
    if (slotContent && slotContent.classList.contains('slot-content')) {
        const slotIndex = parseInt(slotContent.dataset.slotIndex);
        const eventIndex = parseInt(touchDragElement.dataset.eventIndex);
        
        // Check if slot already has an event
        if (timelineState.slots[slotIndex] !== null) {
            // Return old event to pool
            const oldEventIndex = timelineState.slots[slotIndex];
            const oldCard = createEventCard(oldEventIndex);
            document.getElementById('eventsPool').appendChild(oldCard);
        }
        
        // Place new event in slot
        timelineState.slots[slotIndex] = eventIndex;
        slotContent.innerHTML = touchDragElement.innerHTML;
        slotContent.style.color = '#333';
        slotContent.style.fontStyle = 'normal';
        slotContent.style.border = '2px solid #90EE90';
        slotContent.style.cursor = 'pointer';
        slotContent.parentElement.classList.add('filled');
        
        // Make slot content clickable to remove
        slotContent.onclick = () => removeEventFromSlot(slotIndex);
        slotContent.title = 'Click to remove and rearrange';
        
        // Remove card from pool
        touchDragElement.remove();
    }
    
    // Cleanup
    touchDragElement.classList.remove('dragging');
    touchClone.remove();
    touchDragElement = null;
    touchClone = null;
}

// Auto-scroll functionality
function startAutoScroll(speed) {
    if (autoScrollInterval) return; // Already scrolling
    
    autoScrollInterval = setInterval(() => {
        window.scrollBy(0, speed);
    }, 16); // ~60fps
}

function stopAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }
}

// Remove event from slot and return to pool
function removeEventFromSlot(slotIndex) {
    const eventIndex = timelineState.slots[slotIndex];
    
    if (eventIndex === null) return; // Slot is already empty
    
    // Get the slot content element
    const slotContent = document.querySelector(`[data-slot-index="${slotIndex}"].slot-content`);
    
    // Create new card and add back to pool
    const card = createEventCard(eventIndex);
    document.getElementById('eventsPool').appendChild(card);
    
    // Clear the slot
    timelineState.slots[slotIndex] = null;
    slotContent.innerHTML = 'Drop event here...';
    slotContent.style.color = '#999';
    slotContent.style.fontStyle = 'italic';
    slotContent.style.border = '2px dashed #ffb6c1';
    slotContent.style.cursor = 'default';
    slotContent.parentElement.classList.remove('filled');
    slotContent.onclick = null;
    slotContent.title = '';
}

// Check timeline answer
function checkTimeline() {
    // Check if all slots are filled
    if (timelineState.slots.includes(null)) {
        alert('Please place all events on the timeline! 💕');
        return;
    }
    
    // Check if order is correct
    const isCorrect = timelineState.slots.every((eventIndex, slotIndex) => {
        return eventIndex === slotIndex;
    });
    
    if (isCorrect) {
        // Correct! Show celebration
        spawnCelebrationMascot();
        showTimelineResult();
    } else {
        // Wrong order - give hint
        const btn = document.getElementById('checkTimelineBtn');
        btn.textContent = 'Not quite! Try again 💕';
        btn.style.background = '#FFB6C1';
        
        setTimeout(() => {
            btn.textContent = 'Check My Answer ✓';
            btn.style.background = '';
        }, 2000);
    }
}

function showTimelineResult() {
    // Hide the game
    document.querySelector('.timeline-game').style.display = 'none';
    
    // Show result
    const resultBox = document.getElementById('result3');
    resultBox.classList.remove('hidden');
    
    // Create timeline reveal with photos
    const revealContainer = document.getElementById('timelineReveal');
    revealContainer.innerHTML = '';
    
    gameData.level3.events.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const number = document.createElement('div');
        number.className = 'timeline-item-number';
        number.textContent = index + 1;
        
        const content = document.createElement('div');
        content.className = 'timeline-item-content';
        
        const text = document.createElement('div');
        text.className = 'event-text';
        text.textContent = event.text;
        
        const date = document.createElement('div');
        date.className = 'event-date';
        date.textContent = event.date;
        
        const img = document.createElement('img');
        img.src = event.photo;
        img.alt = event.text;
        
        content.appendChild(text);
        content.appendChild(date);
        content.appendChild(img);
        
        item.appendChild(number);
        item.appendChild(content);
        
        revealContainer.appendChild(item);
    });
    
    document.getElementById('note3').textContent = gameData.level3.loveNote;
}

// Check answer
function checkAnswer(level, selectedIndex, correctIndex) {
    const optionsContainer = document.getElementById(`options${level}`);
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === correctIndex) {
        // Correct answer
        buttons[selectedIndex].classList.add('correct');
        spawnCelebrationMascot(); // Spawn mascot on correct answer!
        setTimeout(() => showResult(level), 800);
    } else {
        // Wrong answer - show hint
        buttons[selectedIndex].classList.add('wrong');
        setTimeout(() => {
            buttons[selectedIndex].classList.remove('wrong');
            buttons[selectedIndex].disabled = false;
            showHint(level, optionsContainer);
            // Re-enable other buttons
            buttons.forEach((btn, idx) => {
                if (idx !== selectedIndex) btn.disabled = false;
            });
        }, 600);
    }
}

// Show hint for wrong answer
function showHint(level, container) {
    // Remove existing hint if any
    const existingHint = container.parentElement.querySelector('.hint-message');
    if (existingHint) existingHint.remove();
    
    const hint = document.createElement('div');
    hint.className = 'hint-message';
    hint.textContent = '💡 Hmm, try again! Think about our special moments together...';
    container.parentElement.insertBefore(hint, container);
    
    setTimeout(() => hint.remove(), 3000);
}

// Show result for each level
function showResult(level) {
    const questionBox = document.querySelector(`#level${level} .question-box`);
    const resultBox = document.getElementById(`result${level}`);
    
    questionBox.style.display = 'none';
    resultBox.classList.remove('hidden');
    
    if (level === 1) {
        document.getElementById('photo1').src = gameData.level1.photo;
        document.getElementById('note1').textContent = gameData.level1.loveNote;
    } else if (level === 2) {
        // Replace blurred photo with clear photo and show love note
        const blurredImg = document.getElementById('blurredPhoto');
        blurredImg.src = gameData.level2.photo;
        blurredImg.classList.remove('blurred');
        document.getElementById('note2').textContent = gameData.level2.loveNote;
    } else if (level === 4) {
        // Replace blurred photo with clear photo and show love note
        const blurredImg2 = document.getElementById('blurredPhoto2');
        blurredImg2.src = gameData.level4.photo;
        blurredImg2.classList.remove('blurred');
        document.getElementById('revealedPhoto2').src = gameData.level4.photo;
        document.getElementById('note4').textContent = gameData.level4.loveNote;
    }
    // Level 3 uses showTimelineResult() instead
}

// Move to next level
function nextLevel(level) {
    if (level === 2) {
        switchScreen('level1', 'level2');
        setupLevel2();
    } else if (level === 3) {
        switchScreen('level2', 'level3');
        setupLevel3();
    } else if (level === 4) {
        switchScreen('level3', 'level4');
        setupLevel4();
    } else if (level === 5) {
        switchScreen('level4', 'level5');
    }
}

// Check Level 5 multi-select answer
function checkLoveSelection() {
    const food = document.getElementById('opt-food').checked;
    const smitha = document.getElementById('opt-smitha').checked;
    const ps5 = document.getElementById('opt-ps5').checked;
    const makeup = document.getElementById('opt-makeup').checked;
    
    // Check if EXACTLY food and makeup are selected (and nothing else)
    if (food && makeup && !smitha && !ps5) {
        // Correct answer! Show restaurant reveal
        document.querySelector('#level5 .question-box').style.display = 'none';
        switchScreen('level5', 'restaurantReveal');
        launchConfetti();
    } else {
        // Wrong answer - show warning
        document.getElementById('warningPrompt').classList.remove('hidden');
    }
}

// Retry selection
function retrySelection() {
    document.getElementById('warningPrompt').classList.add('hidden');
    // Uncheck all boxes
    document.getElementById('opt-food').checked = false;
    document.getElementById('opt-smitha').checked = false;
    document.getElementById('opt-ps5').checked = false;
    document.getElementById('opt-makeup').checked = false;
}

// Continue to birthday quiz
function continueToBirthdayQuiz() {
    switchScreen('restaurantReveal', 'birthdayQuiz1');
}

// Check birthday dates (15 and 27 in any order)
function checkBirthdayDates() {
    const date1 = parseInt(document.getElementById('birthday1').value);
    const date2 = parseInt(document.getElementById('birthday2').value);
    
    // Check if both 15 and 27 are entered (in any order)
    const isCorrect = (date1 === 15 && date2 === 27) || (date1 === 27 && date2 === 15);
    
    if (isCorrect) {
        // Correct! Move to next quiz
        document.getElementById('birthdayError').classList.add('hidden');
        switchScreen('birthdayQuiz1', 'birthdayQuiz2');
        
        // Always show 1527 regardless of input order
        document.getElementById('combinedDates').textContent = '1527';
    } else {
        // Wrong answer - show error
        document.getElementById('birthdayError').classList.remove('hidden');
    }
}

// Check reversed number (must be 7251)
function checkReversedNumber() {
    const reversed = parseInt(document.getElementById('reversedNumber').value);
    
    if (reversed === 7251) {
        // Correct! Show gift card
        document.getElementById('reverseError').classList.add('hidden');
        
        // Populate gift card details from gameData
        document.getElementById('giftCardNumber').textContent = gameData.giftCardNumber;
        document.getElementById('giftCardPin').textContent = gameData.giftCardPin;
        
        switchScreen('birthdayQuiz2', 'makeupReveal');
        launchConfetti();
    } else {
        // Wrong answer - show error
        document.getElementById('reverseError').classList.remove('hidden');
    }
}

// Copy gift card details
function copyGiftDetails() {
    const cardNumber = document.getElementById('giftCardNumber').textContent;
    const cardPin = document.getElementById('giftCardPin').textContent;
    const details = `Nykaa Gift Card\nAmount: ₹7251\nCard Number: ${cardNumber}\nCard PIN: ${cardPin}`;
    
    navigator.clipboard.writeText(details).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied! ✓';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// Copy gift code to clipboard (old function - kept for compatibility)
function copyGiftCode() {
    const code = document.getElementById('giftCode').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector('.btn-copy');
        const originalText = btn.textContent;
        btn.textContent = 'Copied! ✓';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// Confetti animation
function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ff69b4'];
    
    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((c, index) => {
            ctx.beginPath();
            ctx.lineWidth = c.r / 2;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + c.r / 4, c.y);
            ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 4);
            ctx.stroke();
            
            c.tiltAngle += c.tiltAngleIncremental;
            c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
            c.x += Math.sin(c.d);
            c.tilt = Math.sin(c.tiltAngle - index / 3) * 15;
            
            if (c.y > canvas.height) {
                confetti[index] = {
                    x: Math.random() * canvas.width,
                    y: -20,
                    r: c.r,
                    d: c.d,
                    color: c.color,
                    tilt: c.tilt,
                    tiltAngleIncremental: c.tiltAngleIncremental,
                    tiltAngle: c.tiltAngle
                };
            }
        });
        
        requestAnimationFrame(draw);
    }
    
    draw();
    
    // Stop confetti after 10 seconds
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 10000);
}

// EmailJS Configuration
// SETUP REQUIRED: Get these from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_a1zgt0r'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_2uuo0zb'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'XefoLrp8yDmRy-h8L'; // Replace with your EmailJS public key

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

// Email gift card function
function emailGiftCard() {
    const giftCardNumber = document.getElementById('giftCardNumber').textContent;
    const giftCardPin = document.getElementById('giftCardPin').textContent;
    const amount = '7251';
    const recipientEmail = 'aayushi2003thakur@gmail.com'; // Change to her email: aayushi2003thakur@gmail.com
    
    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        // Fallback to mailto if not configured
        sendEmailViaMailto(giftCardNumber, giftCardPin, amount, recipientEmail);
        return;
    }
    
    // Create beautiful HTML email content
    const emailSubject = '🎁 Your Birthday Gift Card! 💕';
    const emailBody = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Arial', sans-serif; background: linear-gradient(135deg, #ffeef8, #ffe0f0); padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; padding: 30px; box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3); }
        .header { text-align: center; color: #ff1493; font-size: 2rem; margin-bottom: 20px; }
        .gift-box { background: linear-gradient(135deg, #fff0f5, #ffe4e1); border-radius: 15px; padding: 25px; text-align: center; margin: 20px 0; }
        .amount { font-size: 2.5rem; color: #ff69b4; font-weight: bold; margin: 15px 0; }
        .code { font-family: 'Courier New', monospace; background: #fff0f5; padding: 15px 25px; border-radius: 10px; color: #ff1493; font-weight: 700; font-size: 1.2rem; letter-spacing: 2px; display: inline-block; margin: 10px 0; }
        .message { color: #666; font-size: 1.1rem; line-height: 1.6; margin: 20px 0; }
        .hearts { text-align: center; font-size: 2rem; margin: 20px 0; }
        .footer { text-align: center; color: #999; font-size: 0.9rem; margin-top: 30px; border-top: 2px solid #ffe4e1; padding-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">🎁 Happy Birthday! 🎂</div>
        
        <div class="gift-box">
            <h2 style="color: #ff69b4; margin-bottom: 10px;">Your Nykaa Gift Card</h2>
            <div class="amount">₹${amount}</div>
            <p style="color: #666; margin: 10px 0;">Card Number:</p>
            <div class="code">${giftCardNumber}</div>
            <p style="color: #666; margin: 10px 0;">Card PIN:</p>
            <div class="code">${giftCardPin}</div>
        </div>
        
        <div class="message">
            <p>From our birthdays (15th March + 27th April) to your beauty! 🎂💕</p>
            <p style="margin-top: 15px;">Please go treat yourself to something beautiful! You deserve all the happiness in the world. 💄✨</p>
        </div>
        
        <div class="hearts">💕 💖 💗 💓 💝</div>
        
        <div class="footer">
            <p>With all my love 💕</p>
            <p style="font-size: 0.8rem; margin-top: 10px;">Use this card at Nykaa.com to redeem your gift!</p>
        </div>
    </div>
</body>
</html>`;

    // Send email using EmailJS
    const templateParams = {
        to_email: recipientEmail,
        subject: emailSubject,
        gift_code: giftCardNumber,
        gift_amount: amount,
        gift_pin: giftCardPin,
        html_content: emailBody
    };
    
    // Show loading state
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Sending... ⏳';
    btn.disabled = true;
    
    // Send email via EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            
            // Show success message
            const successMsg = document.getElementById('emailSuccess');
            successMsg.classList.remove('hidden');
            
            // Reset button
            btn.textContent = '✓ Sent!';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                successMsg.classList.add('hidden');
            }, 5000);
        }, function(error) {
            console.error('Email failed to send:', error);
            
            // Fallback to mailto
            sendEmailViaMailto(giftCode, amount, recipientEmail);
            
            // Reset button
            btn.textContent = originalText;
            btn.disabled = false;
        });
}

// Fallback mailto function
function sendEmailViaMailto(giftCardNumber, giftCardPin, amount, recipientEmail) {
    const emailSubject = '🎁 Your Birthday Gift Card! 💕';
    const emailBody = `
Happy Birthday! 🎂

Your Nykaa Gift Card:
Amount: ₹${amount}
Card Number: ${giftCardNumber}
Card PIN: ${giftCardPin}

From our birthdays (15th March + 27th April) to your beauty! 🎂💕

Please go treat yourself to something beautiful! You deserve all the happiness in the world. 💄✨

With all my love 💕
Use this card at Nykaa.com to redeem your gift!
`;
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Show success message
    const successMsg = document.getElementById('emailSuccess');
    successMsg.classList.remove('hidden');
    setTimeout(() => {
        successMsg.classList.add('hidden');
    }, 5000);
}

// Background Music Control
let musicPlaying = false;
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

function toggleMusic() {
    const bgMusicElement = document.getElementById('bgMusic');
    if (musicPlaying) {
        bgMusicElement.pause();
        musicToggle.textContent = '🔇';
        musicToggle.classList.add('muted');
        musicPlaying = false;
    } else {
        bgMusicElement.volume = 0.3; // Ensure volume is set
        bgMusicElement.play().catch(e => console.log('Audio play failed:', e));
        musicToggle.textContent = '🔊';
        musicToggle.classList.remove('muted');
        musicPlaying = true;
    }
}

// Auto-play music on first user interaction
function startMusicOnInteraction() {
    if (!musicPlaying) {
        bgMusic.play().catch(e => console.log('Audio autoplay blocked'));
        musicPlaying = true;
        musicToggle.textContent = '🔊';
    }
    // Remove listeners after first interaction
    document.removeEventListener('click', startMusicOnInteraction);
    document.removeEventListener('touchstart', startMusicOnInteraction);
}

// Initialize on page load
window.addEventListener('load', () => {
    createFloatingHearts();
    createMascots(); // Initialize mascots!
    
    // Set initial volume
    bgMusic.volume = 0.3; // 30% volume (adjust as needed)
    
    // Try to autoplay (will work after user interaction)
    document.addEventListener('click', startMusicOnInteraction);
    document.addEventListener('touchstart', startMusicOnInteraction);
});

// Handle window resize for confetti
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confettiCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
