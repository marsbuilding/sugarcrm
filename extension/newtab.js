// CRM Data Management
class CRMManager {
    constructor() {
        this.deals = [];
        this.currentTheme = 'light';
        this.currentDealId = null;
        this.currentFilter = '';
        this.currentView = 'home';
        this.searchQuery = '';
        this.hideClosedDeals = true;
        this.motivationalMessages = {
            'existential': [
                "You're not behind on follow-ups. You're waiting for divine timing.",
                "There's gold in the second follow-up. Dig.",
                "Just because they ghosted doesn't mean you should.",
                "People buy when they feel seen. Start there.",
                "The deal isn't dead. It's just taking a nap.",
                "The real pitch starts after the pitch.",
                "You don't need more leads. You need more honesty.",
                "They didn't say no. They said not yet.",
                "You're not closing deals today—you're opening doors.",
                "Conversations > conversions. (Usually.)"
            ],
            'savage': [
                "The CRM isn't going to update itself.",
                "Stop blaming the leads. Start owning the follow-through.",
                "That \"quick call\" wasn't quick because you didn't prep.",
                "Not every no is about you. But some are.",
                "If you have time to refresh LinkedIn, you have time to send the email.",
                "The founder doesn't need another update. They need results.",
                "That \"perfect\" prospect? Not worth your peace.",
                "Inbox zero doesn't mean pipeline full.",
                "You don't need another tool. You need to hit send.",
                "Saying yes to every collab is how your strategy gets blurry."
            ],
            'grounding': [
                "Your next big win might be one weird DM away.",
                "Be the partner you'd want to pitch.",
                "Don't rush the relationship.",
                "It's okay to pause before responding.",
                "You're not annoying. You're just persistent.",
                "Nobody likes pushy. Everybody likes clear.",
                "The right collab feels like flow, not friction.",
                "Listen more. That's where the insight hides.",
                "One warm intro > ten cold ones.",
                "Follow-through is your love language."
            ],
            'absurdist': [
                "The stars say: don't send that pitch deck yet.",
                "You manifested pipeline. Now manage it.",
                "The deal is alive. Just very quiet.",
                "Mercury isn't in retrograde. Your CRM is.",
                "The founder you're chasing is also avoiding emails.",
                "Rejection builds resilience. And better email templates.",
                "Your Zoom face is giving I need a walk.",
                "Today's alignment: you, the prospect, and a scheduling link.",
                "Don't pitch someone you wouldn't get a drink with.",
                "The stars aren't aligned. But your calendar can be."
            ],
            'encouraging': [
                "You already know what to do. Start with one email.",
                "There's magic in your follow-up tone today.",
                "You're not a robot. Don't talk like one.",
                "A little charm goes further than another feature.",
                "You're not here to beg. You're here to bring value.",
                "The next yes comes from showing up, not showing off.",
                "You don't need a win. You need momentum.",
                "Be curious. Not every conversation needs to convert.",
                "Rejection today builds stories for tomorrow.",
                "You're not closing deals—you're building stories."
            ],
            'cryptic': [
                "Pitch. Pause. Personalize.",
                "Energy > urgency.",
                "Ask better questions.",
                "Follow up, not through.",
                "Send the weird email.",
                "Don't overthink the deck.",
                "Mute Slack. Write the follow-up.",
                "Be the calmest person on the call.",
                "Close the tab. Make the call.",
                "Keep going. The yes is coming."
            ]
        };
        this.motivationalQuotes = [
            "Go get that bag, sis.",
            "You're the asset.",
            "Closed mouths don't get fed.",
            "Follow the frictionless yes.",
            "Paid or it didn't happen.",
            "Dream in invoices.",
            "Booked and unbothered.",
            "Baby, you're the strategy.",
            "Pitch it like it's already sold.",
            "Your energy is your value.",
            "Show receipts, not potential.",
            "Be expensive and kind.",
            "Exit plans only.",
            "Work light, hit heavy.",
            "Your calendar is your boundary.",
            "The quiet ones are building.",
            "Sell the vibe.",
            "Numbers don't lie.",
            "Scale with soul.",
            "Less grind, more alignment.",
            "Speak profit fluently.",
            "Focus is a flex.",
            "Monetize your magic.",
            "Ask for what you really want.",
            "Brand like Beyoncé.",
            "Say no with grace.",
            "Your network is compounding.",
            "Let the work whisper.",
            "The bag wants you too.",
            "Rejection is redirection."
        ];
        this.salesTips = [
            {
                text: "Most people stop at surface-level discovery. But it's usually the next question — \"What happens if this doesn't get solved?\" or \"Who else is impacted?\" — that uncovers urgency or the real buying motive. Don't rush to pitch; keep the spotlight on them."
            },
            {
                text: "Consultative selling starts with being the expert who helps them see what they've missed. Use your calls to help them diagnose their challenge more clearly than they could on their own — and only then position your offer as the natural next step."
            },
            {
                text: "The pause after stating your price is sacred. Let it hang. Let them process. If you rush to justify, discount, or talk over the moment, you communicate uncertainty. Own it. Price is part of your confidence."
            },
            {
                text: "If they say \"This looks cool, maybe in Q3,\" you've already lost. Anchor your conversations in urgency: what shifted today that makes this worth their time and money? No urgency = no deal. Get to the trigger fast."
            },
            {
                text: "Seriously. When you repeat their exact phrasing in your deck, email, or follow-up — you short-circuit resistance. It shows you're listening. Example: If they say \"We're drowning in manual reporting,\" don't say \"automated dashboards,\" say \"You mentioned drowning in manual reports — here's how we solve that.\""
            },
            {
                text: "No one wants a monologue or a résumé dump. Ask thoughtful questions. Make them feel seen. Follow the thread. Be someone they'd want to talk to again — not someone trying to \"get the close.\""
            },
            {
                text: "The best closers are not louder, faster, or pushier. They're better at clarifying the prospect's needs. They summarize insightfully. They say things like, \"So what I'm hearing is X. Is that right?\" And suddenly the buyer feels understood. That's the close."
            },
            {
                text: "A strong deck supports your narrative but doesn't drive it. Use it to underline — not lead. If you lean on it too hard, you lose the human advantage. Lead with questions. Let the deck fill in, not take over."
            },
            {
                text: "Ghosting usually happens when the problem wasn't painful enough or clear enough. Revisit the stakes. Ask: \"Is this still a priority on your side?\" or \"Has the situation changed?\" Respect their time — but don't disappear yourself."
            },
            {
                text: "Replace \"Just checking in\" with \"Wanted to share this article you might find helpful on [their problem].\" Be the one adding value even when they're slow to respond."
            },
            {
                text: "Ask directly: \"What does the decision-making process look like on your end?\" It's not pushy — it's professional. Skipping this is the fast track to stalled deals."
            },
            {
                text: "The way you speak, hold silence, and move through objections teaches your buyer how to feel about you. Be calm. Be clear. And if you don't know the answer? Say, \"Let me find out and get back to you today.\" That's strength too."
            },
            {
                text: "Don't try to be everything. Show them the single, painful, costly thing you solve — and why that's worth prioritizing. People don't buy \"nice to haves,\" they buy relief."
            },
            {
                text: "Buzzwords don't close deals. Precision does. Instead of \"We drive meaningful engagement through scalable solutions,\" try \"We help reduce back-and-forth by automating follow-ups, saving 4–6 hours weekly per team member.\""
            },
            {
                text: "Ask: \"If this worked perfectly, what would that look like on your end?\" Tie every future conversation to that vision. That's the outcome they'll fight for — not your features."
            },
            {
                text: "Before every interaction, ask yourself: \"How can I make this worth their time, even if they don't buy?\" The long game always wins."
            },
            {
                text: "They're already the protagonist. You're just the shortcut to their success. Stop trying to \"win\" the call — help them win. The energy shift is game-changing."
            },
            {
                text: "Don't linger in the gray. If they've gone cold, try: \"I don't want to clog your inbox — should I close this out for now?\" Clarity beats slow death."
            },
            {
                text: "That Head of Ops might be scared of failing. That VP might want a promotion. That founder might be burned out. People buy emotionally — even in B2B. Know what really drives them."
            },
            {
                text: "Send one right after your call. Make it specific, helpful, and memorable. Include: what you heard, what's next, and how to reach you. 70% of reps don't do this. Be the one who does."
            },
            {
                text: "Would you respond to what you're sending? No? Then don't send it. Real language wins. \"Hey — I know you're juggling a lot. Want me to resend the info in a shorter version?\""
            },
            {
                text: "Use phrases like \"Is that still accurate?\" or \"Would that solve the thing you mentioned last time?\" Listening is a sales skill most overlook. Lean into it."
            },
            {
                text: "Objections = engagement. Instead of panicking, get curious. \"Totally fair — can I ask what makes that important for you?\" You'll either unblock the deal or learn something vital."
            },
            {
                text: "Leaving it open-ended? Risky. Even if it's \"Let's check back next month,\" schedule it. \"Want to lock something in for after your launch — say, the week of August 5th?\""
            },
            {
                text: "You don't have to \"close hard.\" You do have to move steadily. Think progress, not push. \"We're here now — what's a good next step to keep things moving?\""
            },
            {
                text: "If something won't serve them well, say so. \"Honestly, I think the other plan may be a better fit based on what you've shared.\" Long-term trust > short-term close."
            },
            {
                text: "People skim. Use bold headers. Bullet points. One-line insights. Make it easy to say yes."
            },
            {
                text: "Buying is risky. Reassure them with case studies, proof, clear answers, and a vibe that says, \"I've got you.\" That's how you win deals and advocates."
            },
            {
                text: "Reignite urgency with questions like: \"Last time we spoke, you mentioned [X]. Is that still creating friction for the team?\" Pain is the deal's fuel."
            },
            {
                text: "Every lost deal is a lesson. Was it timing? Fit? Priority? Process? Debrief yourself. The reps who grow fastest are the ones who treat every no like data, not drama."
            }
        ];
        this.init();
    }

    async init() {
        this.showLoadingScreen();
        await this.loadTheme();
        await this.loadDeals();
        this.setupEventListeners();
        this.setDailyMotivationalQuote(); // Keep daily quote as is
        this.setSessionContent(); // Set session-based content once
        this.renderDeals();
        this.renderNextSteps();
    }

    // Theme management
    async loadTheme() {
        try {
            const result = await chrome.storage.local.get(['theme']);
            if (result.theme) {
                this.currentTheme = result.theme;
            } else {
                // Default to light mode
                this.currentTheme = 'light';
            }
            this.applyTheme();
        } catch (error) {
            console.error('Error loading theme:', error);
        }
    }

    async saveTheme() {
        try {
            await chrome.storage.local.set({ theme: this.currentTheme });
        } catch (error) {
            console.error('Error saving theme:', error);
        }
    }

    applyTheme() {
        document.body.setAttribute('data-theme', this.currentTheme);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        this.saveTheme();
    }

    // Audio functionality for cash icon
    playCashSound() {
        try {
            // Create audio element for cash sound
            const audio = new Audio();
            
            // Use a cash register sound effect (placeholder URL - in production, use local file)
            // For now, using a simple beep sound that works cross-browser
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Cash register-like sound frequencies
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (error) {
            console.log('Audio not supported or failed to play:', error);
        }
    }

    showLoadingScreen() {
        const progressFill = document.getElementById('progressFill');
        
        // Animate progress bar
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += 2.5; // 100% over 4 seconds (40 intervals of 100ms)
            progressFill.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(progressInterval);
                setTimeout(() => {
                    this.hideLoadingScreen();
                }, 200);
            }
        }, 100);
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const appContainer = document.getElementById('appContainer');
        
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            appContainer.style.display = 'flex';
        }, 500);
    }

    setDailyMotivationalQuote() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
        const quoteIndex = dayOfYear % this.motivationalQuotes.length;
        const quote = this.motivationalQuotes[quoteIndex];
        
        document.getElementById('motivationQuote').textContent = quote;
    }

    setDailySalesTip() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
        const tipIndex = dayOfYear % this.salesTips.length;
        const tip = this.salesTips[tipIndex];
        
        document.getElementById('salesTipText').textContent = tip.text;
    }

    setMotivationalMessage() {
        // Get all message categories
        const categories = Object.keys(this.motivationalMessages);
        
        // Select random category
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        
        // Select random message from category
        const messages = this.motivationalMessages[randomCategory];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Update the display
        const messageElement = document.getElementById('motivationalMessageText');
        if (messageElement) {
            messageElement.style.animation = 'none';
            messageElement.offsetHeight; // Trigger reflow
            messageElement.style.animation = 'fadeInText 1s ease-in-out';
            messageElement.textContent = randomMessage;
        }
    }

    startMessageRotation() {
        // Rotate messages every 30 seconds with some randomness
        setInterval(() => {
            // Add randomness to timing (25-35 seconds)
            const randomDelay = Math.random() * 10000 + 25000;
            setTimeout(() => {
                this.setMotivationalMessage();
            }, randomDelay);
        }, 30000);
    }

    // Data persistence
    async loadDeals() {
        try {
            const result = await chrome.storage.local.get(['deals']);
            this.deals = result.deals || [];
        } catch (error) {
            console.error('Error loading deals:', error);
            this.deals = [];
        }
    }

    async saveDeals() {
        try {
            await chrome.storage.local.set({ deals: this.deals });
        } catch (error) {
            console.error('Error saving deals:', error);
        }
    }

    // Deal operations
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    addDeal(dealData) {
        const deal = {
            id: this.generateId(),
            name: dealData.name || '',
            company: dealData.company || '',
            contactName: dealData.contactName || '',
            dealSize: dealData.dealSize || '',
            stage: dealData.stage || 'Lead',
            funnel: dealData.funnel || 'Sales',
            notes: dealData.notes || '',
            tasks: dealData.tasks || [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        this.deals.unshift(deal);
        this.saveDeals();
        this.renderDeals();
        this.renderNextSteps();
        return deal;
    }

    updateDeal(id, dealData) {
        const index = this.deals.findIndex(deal => deal.id === id);
        if (index !== -1) {
            this.deals[index] = {
                ...this.deals[index],
                ...dealData,
                updatedAt: new Date().toISOString()
            };
            this.saveDeals();
            this.renderDeals();
            this.renderNextSteps();
            return this.deals[index];
        }
        return null;
    }

    deleteDeal(id) {
        const index = this.deals.findIndex(deal => deal.id === id);
        if (index !== -1) {
            this.deals.splice(index, 1);
            this.saveDeals();
            this.renderDeals();
            this.renderNextSteps();
            return true;
        }
        return false;
    }

    getDeal(id) {
        return this.deals.find(deal => deal.id === id);
    }

    toggleTask(dealId, taskIndex) {
        const deal = this.getDeal(dealId);
        if (deal && deal.tasks && deal.tasks[taskIndex]) {
            deal.tasks[taskIndex].completed = !deal.tasks[taskIndex].completed;
            this.updateDeal(dealId, { tasks: deal.tasks });
        }
    }

    // Navigation
    switchView(viewName) {
        // Update sidebar active state
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeItem = document.querySelector(`[data-view="${viewName}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }

        // Update views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        
        const targetView = document.getElementById(`${viewName}View`);
        if (targetView) {
            targetView.classList.add('active');
        }

        this.currentView = viewName;
    }

    // UI Event Handlers
    setupEventListeners() {
        // New deal button
        document.getElementById('newDealBtn').addEventListener('click', () => {
            this.animateHeartClick();
            this.openModal();
        });

        // Heart hover effects
        document.getElementById('newDealBtn').addEventListener('mouseenter', () => {
            this.createSparkles();
        });

        // Sidebar navigation
        // Only home view exists now, no navigation needed

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.renderDeals();
        });

        // Toggle for hiding closed deals
        document.getElementById('hideClosedDeals').addEventListener('change', (e) => {
            this.hideClosedDeals = e.target.checked;
            this.renderDeals();
        });

        // Modal close buttons
        document.getElementById('closeBtn').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('cancelBtn').addEventListener('click', () => {
            this.closeModal();
        });

        // Form submission
        document.getElementById('dealForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });

        // Delete button
        document.getElementById('deleteBtn').addEventListener('click', () => {
            this.handleDelete();
        });

        // Modal backdrop click
        document.getElementById('dealModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('dealModal')) {
                this.closeModal();
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.getElementById('dealModal').classList.contains('active')) {
                this.closeModal();
            }
        });

        // Filter pills
        document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.addEventListener('click', (e) => {
                // Remove active class from all pills
                document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked pill
                e.target.classList.add('active');
                
                // Update filter
                this.currentFilter = e.target.dataset.filter;
                this.renderDeals();
            });
        });

        // Task management
        document.getElementById('addTaskBtn').addEventListener('click', () => {
            this.addTask();
        });

        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.addTask();
            }
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                chrome.storage.local.get(['theme']).then(result => {
                    if (!result.theme) {
                        this.currentTheme = e.matches ? 'dark' : 'light';
                        this.applyTheme();
                    }
                });
            });
        }

        // Add fade-in animation to elements on scroll
        this.setupScrollAnimations();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        document.querySelectorAll('.deal-item, .motivation-panel, .filter-pills').forEach(el => {
            observer.observe(el);
        });
    }

    // Task management
    addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();
        
        if (taskText) {
            const taskList = document.getElementById('taskList');
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <span class="task-item-text">${this.escapeHtml(taskText)}</span>
                <button type="button" class="remove-task-btn">×</button>
            `;
            
            // Add remove functionality
            taskItem.querySelector('.remove-task-btn').addEventListener('click', () => {
                taskItem.remove();
            });
            
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    getTasksFromForm() {
        const taskItems = document.querySelectorAll('#taskList .task-item');
        return Array.from(taskItems).map(item => ({
            text: item.querySelector('.task-item-text').textContent,
            completed: false
        }));
    }

    populateTasksInForm(tasks) {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        
        if (tasks && tasks.length > 0) {
            tasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.innerHTML = `
                    <span class="task-item-text">${this.escapeHtml(task.text)}</span>
                    <button type="button" class="remove-task-btn">×</button>
                `;
                
                // Add remove functionality
                taskItem.querySelector('.remove-task-btn').addEventListener('click', () => {
                    taskItem.remove();
                });
                
                taskList.appendChild(taskItem);
            });
        }
    }

    // Heart animation effects
    animateHeartClick() {
        const button = document.getElementById('newDealBtn');
        button.classList.add('clicked');
        
        // Remove the class after animation completes
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 400);
        
        // Create burst of sparkles on click
        this.createClickSparkles();
    }

    createSparkles() {
        const button = document.getElementById('newDealBtn');
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create 3-5 sparkles around the heart
        const sparkleCount = Math.floor(Math.random() * 3) + 3;
        
        for (let i = 0; i < sparkleCount; i++) {
            setTimeout(() => {
                this.createSparkle(centerX, centerY, false);
            }, i * 100);
        }
    }

    createClickSparkles() {
        const button = document.getElementById('newDealBtn');
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create more sparkles for click effect
        const sparkleCount = Math.floor(Math.random() * 4) + 6;
        
        for (let i = 0; i < sparkleCount; i++) {
            setTimeout(() => {
                this.createSparkle(centerX, centerY, true);
            }, i * 50);
        }
    }

    createSparkle(centerX, centerY, isClick = false) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random size variation
        const sizes = ['small', '', 'large'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        if (randomSize) sparkle.classList.add(randomSize);
        
        // Random position around the heart
        const radius = isClick ? 30 : 20;
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * radius + 10;
        
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.position = 'fixed';
        sparkle.style.zIndex = '9999';
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 800);
    }

    // Modal management
    openModal(dealId = null) {
        this.currentDealId = dealId;
        const modal = document.getElementById('dealModal');
        const modalTitle = document.getElementById('modalTitle');
        const deleteBtn = document.getElementById('deleteBtn');
        const form = document.getElementById('dealForm');

        if (dealId) {
            const deal = this.getDeal(dealId);
            if (deal) {
                modalTitle.textContent = 'Edit Deal';
                deleteBtn.style.display = 'block';
                this.populateForm(deal);
            }
        } else {
            modalTitle.textContent = 'New Deal';
            deleteBtn.style.display = 'none';
            form.reset();
            this.populateTasksInForm([]);
        }

        modal.classList.add('active');
        document.getElementById('dealName').focus();
    }

    closeModal() {
        document.getElementById('dealModal').classList.remove('active');
        this.currentDealId = null;
        document.getElementById('dealForm').reset();
        this.populateTasksInForm([]);
    }

    populateForm(deal) {
        document.getElementById('dealName').value = deal.name || '';
        document.getElementById('dealCompany').value = deal.company || '';
        document.getElementById('dealContactName').value = deal.contactName || '';
        document.getElementById('dealSize').value = deal.dealSize || '';
        document.getElementById('dealStage').value = deal.stage || 'Lead';
        document.getElementById('dealFunnel').value = deal.funnel || 'Sales';
        document.getElementById('dealNotes').value = deal.notes || '';
        this.populateTasksInForm(deal.tasks || []);
    }

    getFormData() {
        return {
            name: document.getElementById('dealName').value.trim(),
            company: document.getElementById('dealCompany').value.trim(),
            contactName: document.getElementById('dealContactName').value.trim(),
            dealSize: document.getElementById('dealSize').value.trim(),
            stage: document.getElementById('dealStage').value,
            funnel: document.getElementById('dealFunnel').value,
            notes: document.getElementById('dealNotes').value.trim(),
            tasks: this.getTasksFromForm()
        };
    }

    handleFormSubmit() {
        const formData = this.getFormData();
        
        if (!formData.name) {
            alert('Please enter a name for the deal.');
            return;
        }

        if (this.currentDealId) {
            this.updateDeal(this.currentDealId, formData);
        } else {
            this.addDeal(formData);
        }

        this.closeModal();
    }

    handleDelete() {
        if (this.currentDealId) {
            if (confirm('Are you sure you want to delete this deal?')) {
                this.deleteDeal(this.currentDealId);
                this.closeModal();
            }
        }
    }

    // Filtering and searching
    filterDeals() {
        let filteredDeals = this.deals;

        // Apply funnel filter
        if (this.currentFilter) {
            filteredDeals = filteredDeals.filter(deal => deal.funnel === this.currentFilter);
        }

        // Apply search filter
        if (this.searchQuery) {
            filteredDeals = filteredDeals.filter(deal => {
                const searchFields = [
                    deal.name,
                    deal.company,
                    deal.contactName,
                    deal.notes
                ].join(' ').toLowerCase();
                return searchFields.includes(this.searchQuery);
            });
        }

        // Apply closed deals filter
        if (this.hideClosedDeals) {
            filteredDeals = filteredDeals.filter(deal => 
                deal.stage !== 'Won' && deal.stage !== 'Lost'
            );
        }

        return filteredDeals;
    }

    // UI Rendering
    renderDeals() {
        const dealsList = document.getElementById('dealsList');
        const emptyState = document.getElementById('emptyState');

        const filteredDeals = this.filterDeals();

        if (filteredDeals.length === 0) {
            dealsList.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }

        dealsList.style.display = 'block';
        emptyState.style.display = 'none';

        dealsList.innerHTML = filteredDeals.map(deal => this.renderDealItem(deal)).join('');

        // Add click handlers to deal items
        dealsList.querySelectorAll('.deal-item').forEach(item => {
            item.addEventListener('click', (e) => {
                // Don't open modal if clicking on a task checkbox
                if (e.target.classList.contains('deal-task-checkbox') || 
                    e.target.classList.contains('deal-action-btn')) {
                    return;
                }
                const dealId = item.dataset.dealId;
                this.openModal(dealId);
            });
            
            // Add drag and drop event listeners
            this.setupDragAndDrop(item);
        });

        // Add task checkbox handlers
        dealsList.querySelectorAll('.deal-task-checkbox').forEach(checkbox => {
            checkbox.addEventListener('click', (e) => {
                e.stopPropagation();
                const dealId = checkbox.dataset.dealId;
                const taskIndex = parseInt(checkbox.dataset.taskIndex);
                this.toggleTask(dealId, taskIndex);
            });
        });

    }

    setupDragAndDrop(dealItem) {
        let draggedElement = null;
        let placeholder = null;

        dealItem.addEventListener('dragstart', (e) => {
            draggedElement = dealItem;
            dealItem.classList.add('dragging');
            e.dataTransfer.setData('text/plain', dealItem.dataset.dealId);
            e.dataTransfer.effectAllowed = 'move';
            
            // Create placeholder
            placeholder = document.createElement('div');
            placeholder.className = 'deal-item-placeholder';
            placeholder.style.height = dealItem.offsetHeight + 'px';
            placeholder.style.background = 'var(--bg-tertiary)';
            placeholder.style.border = '2px dashed var(--border-color)';
            placeholder.style.borderRadius = '12px';
            placeholder.style.margin = '12px 0';
        });

        dealItem.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            
            if (dealItem !== draggedElement) {
                const rect = dealItem.getBoundingClientRect();
                const midpoint = rect.top + rect.height / 2;
                
                if (e.clientY < midpoint) {
                    dealItem.parentNode.insertBefore(placeholder, dealItem);
                } else {
                    dealItem.parentNode.insertBefore(placeholder, dealItem.nextSibling);
                }
            }
        });

        dealItem.addEventListener('drop', (e) => {
            e.preventDefault();
            
            if (dealItem !== draggedElement && placeholder && placeholder.parentNode) {
                const draggedDealId = e.dataTransfer.getData('text/plain');
                const targetDealId = dealItem.dataset.dealId;
                
                // Find the deals in the array
                const draggedIndex = this.deals.findIndex(deal => deal.id === draggedDealId);
                const targetIndex = this.deals.findIndex(deal => deal.id === targetDealId);
                
                if (draggedIndex !== -1 && targetIndex !== -1) {
                    // Remove the dragged deal from its current position
                    const [draggedDeal] = this.deals.splice(draggedIndex, 1);
                    
                    // Determine new position based on placeholder position
                    const placeholderIndex = Array.from(placeholder.parentNode.children).indexOf(placeholder);
                    const dealItems = Array.from(placeholder.parentNode.querySelectorAll('.deal-item:not(.dragging)'));
                    
                    let newIndex;
                    if (placeholderIndex === 0) {
                        newIndex = 0;
                    } else if (placeholderIndex >= dealItems.length) {
                        newIndex = this.deals.length;
                    } else {
                        const referenceItem = dealItems[placeholderIndex - 1];
                        const referenceDealId = referenceItem ? referenceItem.dataset.dealId : null;
                        newIndex = referenceDealId ? this.deals.findIndex(deal => deal.id === referenceDealId) + 1 : 0;
                    }
                    
                    // Insert the deal at the new position
                    this.deals.splice(newIndex, 0, draggedDeal);
                    
                    // Save and re-render
                    this.saveDeals();
                    this.renderDeals();
                }
            }
        });

        dealItem.addEventListener('dragend', (e) => {
            dealItem.classList.remove('dragging');
            
            // Remove placeholder
            if (placeholder && placeholder.parentNode) {
                placeholder.parentNode.removeChild(placeholder);
            }
            
            // Remove any drag-over classes
            document.querySelectorAll('.deal-item').forEach(item => {
                item.classList.remove('drag-over');
            });
            
            draggedElement = null;
            placeholder = null;
        });

        dealItem.addEventListener('dragenter', (e) => {
            e.preventDefault();
            if (dealItem !== draggedElement) {
                dealItem.classList.add('drag-over');
            }
        });

        dealItem.addEventListener('dragleave', (e) => {
            // Only remove drag-over if we're actually leaving the element
            if (!dealItem.contains(e.relatedTarget)) {
                dealItem.classList.remove('drag-over');
            }
        });
    }

    renderDealItem(deal) {
        const dealSizeDisplay = deal.dealSize ? `$${parseFloat(deal.dealSize).toLocaleString()}` : '';
        
        let tasksHtml = '';
        if (deal.tasks && deal.tasks.length > 0) {
            const incompleteTasks = deal.tasks.filter(task => !task.completed);
            if (incompleteTasks.length > 0) {
                tasksHtml = `
                    <div class="deal-tasks">
                        <div class="deal-tasks-title">Open Tasks:</div>
                        <div class="deal-task-list">
                            ${incompleteTasks.slice(0, 3).map((task, index) => {
                                const originalIndex = deal.tasks.findIndex(t => t.text === task.text && !t.completed);
                                return `
                                    <div class="deal-task-item">
                                        <div class="deal-task-checkbox ${task.completed ? 'completed' : ''}" 
                                             data-deal-id="${deal.id}" 
                                             data-task-index="${originalIndex}"></div>
                                        <span class="deal-task-text ${task.completed ? 'completed' : ''}">${this.escapeHtml(task.text)}</span>
                                    </div>
                                `;
                            }).join('')}
                            ${incompleteTasks.length > 3 ? `<div class="deal-task-item"><span class="deal-task-text">+${incompleteTasks.length - 3} more tasks</span></div>` : ''}
                        </div>
                    </div>
                `;
            }
        }

        return `
            <div class="deal-item" data-deal-id="${deal.id}" draggable="true">
                <div class="deal-header">
                    <div class="deal-info">
                        <div class="deal-name">
                            ${this.escapeHtml(deal.name)}
                            ${dealSizeDisplay ? `<span class="deal-size">${dealSizeDisplay}</span>` : ''}
                        </div>
                        ${deal.company ? `<div class="deal-company">${this.escapeHtml(deal.company)}</div>` : ''}
                    </div>
                    <div class="deal-tags">
                        <span class="deal-tag">${this.escapeHtml(deal.stage)}</span>
                        <span class="deal-tag">${this.escapeHtml(deal.funnel)}</span>
                    </div>
                </div>
                ${tasksHtml}
            </div>
        `;
    }

    renderNextSteps() {
        const nextStepsList = document.getElementById('nextStepsList');
        const emptyState = document.getElementById('nextStepsEmptyState');

        // Get all incomplete tasks from all deals
        const allTasks = [];
        this.deals.forEach(deal => {
            if (deal.tasks && deal.tasks.length > 0) {
                deal.tasks.forEach((task, index) => {
                    if (!task.completed) {
                        allTasks.push({
                            dealId: deal.id,
                            dealName: deal.name,
                            taskIndex: index,
                            taskText: task.text
                        });
                    }
                });
            }
        });

        if (allTasks.length === 0) {
            nextStepsList.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }

        nextStepsList.style.display = 'block';
        emptyState.style.display = 'none';

        nextStepsList.innerHTML = allTasks.map(task => this.renderNextStepItem(task)).join('');

        // Add event listeners
        nextStepsList.querySelectorAll('.next-step-item').forEach(item => {
            const dealId = item.dataset.dealId;
            const taskIndex = parseInt(item.dataset.taskIndex);
            const checkbox = item.querySelector('.next-step-checkbox');
            
            // Checkbox click
            checkbox.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleTask(dealId, taskIndex);
            });

            // Item click - scroll to deal in home view
            item.addEventListener('click', () => {
                this.switchView('home');
                setTimeout(() => {
                    const dealElement = document.querySelector(`[data-deal-id="${dealId}"]`);
                    if (dealElement) {
                        dealElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        dealElement.style.background = '#fff3cd';
                        setTimeout(() => {
                            dealElement.style.background = '';
                        }, 2000);
                    }
                }, 100);
            });
        });
    }

    renderNextStepItem(task) {
        return `
            <div class="next-step-item" data-deal-id="${task.dealId}" data-task-index="${task.taskIndex}">
                <div class="next-step-checkbox"></div>
                <div class="next-step-content">
                    <div class="next-step-deal">${this.escapeHtml(task.dealName)}</div>
                    <div class="next-step-text">${this.escapeHtml(task.taskText)}</div>
                </div>
            </div>
        `;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the CRM when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CRMManager();
});