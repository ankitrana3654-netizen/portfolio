/* ==========================================================
   Ankit Rana Portfolio · shared script for every page
   Edit CONFIG to update contact details site-wide.
   ========================================================== */
const CONFIG = {
  email: "ankitrana3654@gmail.com",
  linkedin: "https://www.linkedin.com/in/ankitrana190997/",
  resume: "assets/Ankit-Rana-Resume.pdf", // place your PDF at this path
  phone: "+918287259865",
  phoneDisplay: "+91 82872 59865",
  whatsappText: "Hi Ankit, I saw your portfolio and would like to connect."
};

(function () {
  const root = document.documentElement;
  root.classList.add("js");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];

  /* Fill contact details wherever they appear */
  $$("[data-email-link]").forEach(a => a.href = "mailto:" + CONFIG.email);
  $$("[data-email-text]").forEach(el => el.textContent = CONFIG.email);
  $$("[data-linkedin]").forEach(a => { a.href = CONFIG.linkedin; a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-resume-download]").forEach(a => { a.href = CONFIG.resume; a.setAttribute("download", "Ankit-Rana-Resume.pdf"); });

  $$("[data-phone-link]").forEach(a => a.href = "tel:" + CONFIG.phone);
  $$("[data-phone-text]").forEach(el => el.textContent = CONFIG.phoneDisplay);
  $$("[data-whatsapp]").forEach(a => { a.href = "https://wa.me/" + CONFIG.phone.replace(/\D/g, "") + "?text=" + encodeURIComponent(CONFIG.whatsappText); a.target = "_blank"; a.rel = "noopener"; });

  /* Work showcase galleries, filled from work-data.js */
  const WORK = window.WORK || {};
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ytId = url => { const m = String(url || "").match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/); return m ? m[1] : null; };
  const LINK_TEXT = { websites: "View prototype", mobile: "View prototype", wireframes: "View in Figma", developed: "Visit live site", branding: "View project", social: "View post", videos: "Watch on YouTube" };
  const cap = (key, it) => `<figcaption><strong>${esc(it.title)}</strong>${it.desc ? `<span>${esc(it.desc)}</span>` : ""}${it.link && key !== "videos" ? (it.unavailable
      ? `<button class="w-link" type="button" data-unavailable="${esc(it.unavailable)}">${esc(it.linkText || LINK_TEXT[key])} <i data-lucide="arrow-up-right"></i></button>`
      : `<a class="w-link" href="${esc(it.link)}" target="_blank" rel="noopener">${esc(it.linkText || LINK_TEXT[key])} <i data-lucide="arrow-up-right"></i></a>`) : ""}</figcaption>`;
  const renderItem = (key, it, i) => {
    if (key === "videos") {
      const id = ytId(it.youtube || it.link);
      const thumb = it.poster || (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "");
      if (id) return `<figure class="w-item"><button class="w-media vid" type="button" data-yt="${id}" data-caption="${esc(it.title)}" aria-label="Play ${esc(it.title)}"><span class="vid-fallback" aria-hidden="true"><strong>${esc(it.title)}</strong></span><img src="${esc(thumb)}" alt="" loading="lazy" onerror="this.remove()"><span class="play"><i data-lucide="play"></i></span><span class="yt-badge"><i data-lucide="youtube"></i>YouTube</span></button>${cap(key, it)}</figure>`;
      if (it.video) return `<figure class="w-item"><div class="w-media"><video controls preload="none" playsinline ${thumb ? `poster="${esc(thumb)}"` : ""} src="${esc(it.video)}"></video></div>${cap(key, it)}</figure>`;
      return `<a class="w-item" href="${esc(it.link)}" target="_blank" rel="noopener"><div class="w-media">${thumb ? `<img src="${esc(thumb)}" alt="" loading="lazy">` : ""}<span class="play"><i data-lucide="play"></i></span></div>${cap(key, it)}</a>`;
    }
    const imgs = it.images || (it.image ? [it.image] : []);
    if (!imgs.length && it.link) {
      return `<figure class="w-item"><a class="w-media type-cover" href="${esc(it.link)}" target="_blank" rel="noopener" aria-label="${esc(it.linkText || LINK_TEXT[key])}: ${esc(it.title)}"><span class="tc-name">${esc(it.title)}</span><span class="tc-sub">${esc(it.desc || "")}</span><span class="tc-go">View project<i data-lucide="arrow-up-right"></i></span></a>${cap(key, it)}</figure>`;
    }
    const cover = it.cover || imgs[0] || "";
    const framed = key === "developed" ? `<span class="w-bar"><i></i><i></i><i></i></span>` : "";
    const many = imgs.length > 1 ? `<span class="w-count"><i data-lucide="images"></i>${imgs.length}</span>` : "";
    return `<figure class="w-item"><button class="w-media zoom${framed ? " framed" : ""}" type="button" data-open="${key}:${i}" aria-label="Open ${esc(it.title)}">${framed}<img src="${esc(cover)}" alt="${esc(it.title)}" loading="lazy">${many}<span class="zoom-ico"><i data-lucide="maximize-2"></i></span></button>${cap(key, it)}</figure>`;
  };
  $$("[data-gallery]").forEach(g => {
    const key = g.dataset.gallery, items = Array.isArray(WORK[key]) ? WORK[key] : [];
    if (!items.length) return;
    g.innerHTML = items.map((it, i) => renderItem(key, it, i)).join("");
    const c = document.querySelector(`[data-count="${key}"]`);
    if (c) { c.textContent = items.length; c.hidden = false; }
  });

  /* Featured brand project (Vocsnova) */
  const F = WORK.featured, fHost = $("#featuredBrand");
  if (F && fHost) {
    const chips = arr => `<ul class="chips">${(arr || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
    const ICONS = ["pen-tool", "palette", "type", "image"];
    const live = b => {
      if (b.kind === "cover") return `<div class="bt-cover"><span class="bt-url">${esc(b.url || "")}</span><span class="bt-name">${esc(F.name)}</span><span class="bt-big">brand<br>guidelines</span></div>`;
      if (b.kind === "palette") return `<div class="bt-palette">${b.colors.map(([n, h]) => `<span style="background:${esc(h)}"><b>${esc(n)}</b><small>${esc(h)}</small></span>`).join("")}</div>`;
      if (b.kind === "type") return `<div class="bt-type" style="font-family:'${esc(b.font)}',sans-serif"><span class="bt-aa">Aa</span><span class="bt-fn">${esc(b.font)} Display</span><span class="bt-w">${b.weights.map((w, i) => `<i style="font-weight:${[400, 500, 600][i] || 400}">${esc(w)}</i>`).join("")}</span></div>`;
      if (b.kind === "shades") return `<div class="bt-shades">${b.colors.map(c => `<span>${[100, 80, 60, 40, 20].map(o => `<i style="background:${esc(c)};opacity:${o / 100}"></i>`).join("")}</span>`).join("")}</div>`;
      return "";
    };
    const board = (F.board || []).map((b, i) => b.image
      ? `<button class="fb-slot s${i}" type="button" data-open="featured:${i}" aria-label="Open ${esc(b.label)}"><img src="${esc(b.image)}" alt="${esc(F.name)} ${esc(b.label)}" loading="lazy">${(b.images || []).length > 1 ? `<span class="w-count"><i data-lucide="images"></i>${b.images.length}</span>` : ""}<span class="zoom-ico"><i data-lucide="maximize-2"></i></span><span class="fb-label">${esc(b.label)}</span></button>`
      : `<div class="fb-slot live s${i}" role="img" aria-label="${esc(F.name)} ${esc(b.label)}">${live(b)}<span class="fb-label">${esc(b.label)}</span></div>`).join("");
    const steps = (F.process || []).map(([t, d], i) => `<li><span>${String(i + 1).padStart(2, "0")}</span><strong>${esc(t)}</strong><p>${esc(d)}</p></li>`).join("");
    fHost.innerHTML = `<article class="feat-proj">
      <div class="fp-info">
        <span class="tag"><i data-lucide="shapes"></i>${esc(F.tag)}</span>
        <h3>${esc(F.name)}</h3>
        <p class="fp-sum">${esc(F.summary)}</p>
        <dl class="fp-meta">
          <div><dt>Role</dt><dd>${esc(F.role)}</dd></div>
          <div><dt>Deliverables</dt><dd>${chips(F.deliverables)}</dd></div>
          <div><dt>Tools</dt><dd>${chips(F.tools)}</dd></div>
        </dl>
        <div class="fp-btns">
          <a class="btn btn-primary magnetic" href="#videos"><i data-lucide="play"></i>Watch the brand films</a>
        </div>
      </div>
      <div class="fp-board">${board}</div>
      ${steps ? `<ol class="fp-steps">${steps}</ol>` : ""}
    </article>`;
    const bg = document.querySelector('[data-gallery="branding"]');
    if (bg && !(WORK.branding || []).length) bg.hidden = true; /* no empty placeholders under the featured project */
  }

  if (window.lucide) lucide.createIcons();

  /* Lightbox: image sets with prev/next, long website pages scroll, YouTube plays inline */
  const lb = $("#lightbox");
  if (lb && typeof lb.showModal === "function") {
    const stage = $("#lbStage"), capEl = $("#lbCap"), countEl = $("#lbCount"), ext = $("#lbExt"), prev = $("#lbPrev"), next = $("#lbNext");
    let set = [], idx = 0, scrollMode = false;
    const show = () => {
      stage.className = "lb-stage" + (scrollMode ? " scroll" : "");
      stage.innerHTML = `<img src="${esc(set[idx])}" alt="${esc(capEl.textContent)} ${set.length > 1 ? `image ${idx + 1} of ${set.length}` : ""}">`;
      stage.scrollTop = 0;
      countEl.textContent = set.length > 1 ? `${idx + 1} / ${set.length}` : "";
      prev.hidden = next.hidden = set.length < 2;
    };
    const setExt = (href, text) => { ext.hidden = !href; if (href) { ext.href = href; ext.innerHTML = `${esc(text)} <i data-lucide="arrow-up-right"></i>`; } };
    document.addEventListener("click", e => {
      const o = e.target.closest("[data-open]"), y = e.target.closest("[data-yt]");
      if (o) {
        const [key, i] = o.dataset.open.split(":");
        if (key === "featured") {
          if (o.classList.contains("empty")) return;
          const B = WORK.featured.board; let start = 0;
          set = []; B.forEach((b, j) => { if (j === +i) start = set.length; set.push(...(b.images || (b.image ? [b.image] : []))); });
          idx = start; scrollMode = false;
          capEl.textContent = WORK.featured.name; setExt(null); show();
          if (window.lucide) lucide.createIcons(); lb.showModal(); return;
        }
        const it = WORK[key][+i];
        set = it.images || [it.image]; idx = 0; scrollMode = key === "websites" || key === "developed" || key === "wireframes";
        capEl.textContent = it.title || ""; setExt(it.unavailable ? null : it.link, it.linkText || LINK_TEXT[key]); show();
      } else if (y) {
        set = []; prev.hidden = next.hidden = true; countEl.textContent = "";
        capEl.textContent = y.dataset.caption || "";
        stage.className = "lb-stage video";
        stage.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${y.dataset.yt}?autoplay=1&rel=0" title="${esc(y.dataset.caption)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
        setExt("https://www.youtube.com/watch?v=" + y.dataset.yt, "Open on YouTube");
      } else return;
      if (window.lucide) lucide.createIcons();
      lb.showModal();
    });
    const go = d => { if (set.length > 1) { idx = (idx + d + set.length) % set.length; show(); } };
    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));
    lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") go(-1); if (e.key === "ArrowRight") go(1); });
    $("#lbClose").addEventListener("click", () => lb.close());
    lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
    lb.addEventListener("close", () => { stage.innerHTML = ""; }); /* stops video playback */
  }

  /* Copy email */
  $$("[data-copy-email]").forEach(btn => btn.addEventListener("click", () => {
    const label = btn.querySelector("span");
    const reset = label.textContent;
    const ok = () => { label.textContent = "Copied!"; setTimeout(() => label.textContent = reset, 2000); };
    const fb = () => {
      const target = btn.closest("[data-copy-scope]")?.querySelector("[data-email-text]");
      if (target) { const r = document.createRange(); r.selectNodeContents(target); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      label.textContent = "Selected, press Ctrl+C";
    };
    try { navigator.clipboard.writeText(CONFIG.email).then(ok, fb); } catch (e) { fb(); }
  }));

  /* Mobile menu */
  const menuBtn = $("#menuBtn"), panel = $("#mobilePanel");
  if (menuBtn && panel) {
    const setMenu = open => { menuBtn.setAttribute("aria-expanded", String(open)); menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); panel.hidden = !open; };
    menuBtn.addEventListener("click", () => setMenu(panel.hidden));
    panel.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !panel.hidden) { setMenu(false); menuBtn.focus(); } });
    addEventListener("resize", () => { if (innerWidth >= 920 && !panel.hidden) setMenu(false); });
  }

  /* Scroll progress + process line */
  const progress = $("#progress"), steps = $("#steps");
  const stepEls = steps ? [...steps.querySelectorAll(".step")] : [];
  let ticking = false;
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    if (steps) {
      const r = steps.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.75 - r.top) / (r.height + innerHeight * 0.1)));
      steps.style.setProperty("--p", p.toFixed(3));
      stepEls.forEach((s, i) => s.classList.toggle("lit", p > 0.02 && p >= i / (stepEls.length - 1) - 0.02));
    }
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* Reveal on scroll + active nav (home page sections) */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -10% 0px" });
    $$(".rv").forEach(el => io.observe(el));
    const links = $$(".nav-links a[href^='#']");
    if (links.length) {
      const nio = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) links.forEach(a => { const on = a.hash === "#" + e.target.id; a.classList.toggle("active", on); });
      }), { rootMargin: "-45% 0px -50% 0px" });
      links.forEach(a => { const s = document.getElementById(a.hash.slice(1)); if (s) nio.observe(s); });
    }
  } else $$(".rv").forEach(el => el.classList.add("in"));

  /* AI typing demo */
  const typed = $("#typed");
  if (typed) {
    const prompts = ["Explore 3 hero layouts for a services website", "Suggest an accessible color palette", "Turn this wireframe into a mobile screen"];
    if (reduce) typed.textContent = prompts[0];
    else {
      let p = 0, c = 0, del = false;
      const tick = () => {
        const t = prompts[p];
        typed.textContent = t.slice(0, c);
        if (!del && c < t.length) { c++; setTimeout(tick, 42); }
        else if (!del) { del = true; setTimeout(tick, 1800); }
        else if (c > 0) { c--; setTimeout(tick, 18); }
        else { del = false; p = (p + 1) % prompts.length; setTimeout(tick, 300); }
      };
      tick();
    }
  }

  /* Contrast demo */
  const cBtn = $("#contrastBtn");
  if (cBtn) {
    const cDemo = $("#contrastDemo"), verdict = $("#verdict");
    cBtn.addEventListener("click", () => {
      const on = cBtn.getAttribute("aria-pressed") !== "true";
      cBtn.setAttribute("aria-pressed", String(on));
      cDemo.classList.toggle("good", on);
      verdict.innerHTML = on ? '<i data-lucide="check"></i>13.9:1 Passes AAA' : '<i data-lucide="x"></i>1.6:1 Fails';
      if (window.lucide) lucide.createIcons();
    });
  }

  /* Pointer-only enhancements (decorative; the page works fully without them) */
  if (fine && !reduce) {
    $$(".tile").forEach(t => t.addEventListener("pointermove", e => {
      const r = t.getBoundingClientRect();
      t.style.setProperty("--x", (e.clientX - r.left) + "px");
      t.style.setProperty("--y", (e.clientY - r.top) + "px");
    }));
    const hv = $("#hvInner"), grid = $("#heroGrid");
    if (hv && grid) {
      grid.addEventListener("pointermove", e => {
        const r = grid.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        hv.style.setProperty("--ry", (x * 12).toFixed(2) + "deg");
        hv.style.setProperty("--rx", (-y * 8).toFixed(2) + "deg");
      });
      grid.addEventListener("pointerleave", () => { hv.style.setProperty("--ry", "0deg"); hv.style.setProperty("--rx", "0deg"); });
    }
    $$(".magnetic").forEach(b => {
      b.addEventListener("pointermove", e => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .22}px, ${(e.clientY - r.top - r.height / 2) * .3}px)`;
      });
      b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });
  }

  /* Work dropdown (click/tap, keyboard, and hover on desktop) */
  const dd = $("#workDD"), ddBtn = $("#workBtn"), ddMenu = $("#workMenu");
  if (dd && ddBtn && ddMenu) {
    let closeTimer, hoverAt = 0;
    const setDD = open => { ddBtn.setAttribute("aria-expanded", String(open)); ddMenu.hidden = !open; if (open && window.lucide) lucide.createIcons(); };
    ddBtn.addEventListener("click", () => { if (Date.now() - hoverAt < 600) return setDD(true); setDD(ddMenu.hidden); });
    if (fine) {
      dd.addEventListener("pointerenter", () => { clearTimeout(closeTimer); if (ddMenu.hidden) hoverAt = Date.now(); setDD(true); });
      dd.addEventListener("pointerleave", () => { closeTimer = setTimeout(() => setDD(false), 180); });
    }
    document.addEventListener("click", e => { if (!dd.contains(e.target)) setDD(false); });
    dd.addEventListener("focusout", e => { if (!dd.contains(e.relatedTarget)) setDD(false); });
    dd.addEventListener("keydown", e => {
      const items = [...ddMenu.querySelectorAll("a")];
      if (e.key === "Escape") { setDD(false); ddBtn.focus(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); if (ddMenu.hidden) setDD(true); const i = items.indexOf(document.activeElement); items[(i + 1) % items.length].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); const i = items.indexOf(document.activeElement); items[(i - 1 + items.length) % items.length].focus(); }
    });
  }

  /* Mobile Work accordion */
  const mBtn = $("#mWorkBtn"), mList = $("#mWork");
  if (mBtn && mList) mBtn.addEventListener("click", () => {
    const open = mList.hidden; mList.hidden = !open; mBtn.setAttribute("aria-expanded", String(open));
  });

  /* Work page filters: show one group of work at a time */
  const filters = $$(".filter");
  if (filters.length) {
    const status = $("#filterStatus");
    const groups = $$("[data-group]");
    filters.forEach(f => f.addEventListener("click", () => {
      const cat = f.dataset.filter;
      filters.forEach(b => b.setAttribute("aria-pressed", String(b === f)));
      groups.forEach(g => { const show = cat === "all" || g.dataset.group === cat; g.hidden = !show; if (show) g.querySelectorAll(".rv").forEach(el => el.classList.add("in")); });
      if (status) status.textContent = cat === "all" ? "Showing all work" : "Showing " + f.textContent.trim();
      f.parentElement.scrollTo({ left: f.offsetLeft - f.parentElement.clientWidth / 2 + f.offsetWidth / 2, behavior: reduce ? "auto" : "smooth" });
      /* bring the filtered results into view just under the filter bar */
      const bar = document.querySelector(".filter-bar");
      const firstShown = groups.find(g => !g.hidden);
      if (bar && firstShown && bar.getBoundingClientRect().top <= 100) {
        scrollTo({ top: firstShown.getBoundingClientRect().top + scrollY - 170, behavior: reduce ? "auto" : "smooth" });
      }
    }));
    /* Dropdown links like work.html#logos: make sure that section is visible */
    addEventListener("hashchange", () => {
      const target = document.getElementById(location.hash.slice(1));
      if (target && target.hidden) { filters[0].click(); target.scrollIntoView(); }
    });
  }

  /* Autoplay videos: play by default (muted), pause off-screen, show Replay when finished */
  $$("[data-autoplay-video]").forEach(box => {
    const v = box.querySelector("video"), btn = box.querySelector(".vid-replay");
    v.muted = true; v.playsInline = true;
    const showBtn = label => { btn.lastChild.textContent = label; btn.hidden = false; box.classList.add("ended"); };
    const play = () => { btn.hidden = true; box.classList.remove("ended"); const pr = v.play(); if (pr && pr.catch) pr.catch(() => showBtn("Play")); };
    v.addEventListener("ended", () => showBtn("Replay"));
    v.addEventListener("playing", () => { btn.hidden = true; box.classList.remove("ended"); });
    btn.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); if (v.ended) v.currentTime = 0; play(); });
    v.addEventListener("click", e => { e.preventDefault(); if (v.paused) play(); else { v.pause(); showBtn("Play"); } });
    if (reduce) { v.removeAttribute("autoplay"); v.pause(); showBtn("Play"); return; }
    play();
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting && !v.paused) { v.pause(); box.dataset.offscreen = "1"; }
        else if (e.isIntersecting && box.dataset.offscreen) { delete box.dataset.offscreen; if (!v.ended) play(); }
      }), { threshold: .25 }).observe(box);
    }
  });

  /* "Link not available" message */
  let toastEl, toastTimer;
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-unavailable]");
    if (!t) return;
    e.preventDefault();
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast"; toastEl.setAttribute("role", "alert");
      document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = `<i data-lucide="link-2-off"></i><span>${esc(t.dataset.unavailable)}</span>`;
    if (window.lucide) lucide.createIcons();
    toastEl.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove("show"), 4000);
  });

  $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
