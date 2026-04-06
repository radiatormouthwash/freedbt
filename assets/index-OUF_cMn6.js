var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=null;function r(e){let t=e.replace(/^#\/?/,``);if(t===``||t===`/`)return{view:`home`};if(t===`settings`)return{view:`settings`};if(t===`demo/datetime`)return{view:`demo-datetime`};if(t===`demo/datetime-range`)return{view:`demo-datetime-range`};if(t===`demo/mood`)return{view:`demo-mood`};if(t===`demo/mood-record`)return{view:`demo-mood-record`};if(t===`demo/sleep-mood`)return{view:`demo-sleep-mood`};let n=t.match(/^new\/(.+)$/);if(n)return{view:`new`,formId:n[1]};let r=t.match(/^edit\/(.+?)\/(\d{4}-\d{2}-\d{2})$/);if(r)return{view:`edit`,formId:r[1],date:r[2]};let i=t.match(/^view\/(.+?)\/(\d{4}-\d{2}-\d{2})$/);return i?{view:`readonly`,formId:i[1],date:i[2]}:{view:`home`}}function i(e){window.location.hash=e}function a(e){n=e,window.addEventListener(`hashchange`,()=>{n&&n(r(window.location.hash))}),e(r(window.location.hash))}function o(e){switch(e.view){case`home`:return`#/`;case`settings`:return`#/settings`;case`new`:return`#/new/${e.formId}`;case`edit`:return`#/edit/${e.formId}/${e.date}`;case`readonly`:return`#/view/${e.formId}/${e.date}`;case`demo-datetime`:return`#/demo/datetime`;case`demo-datetime-range`:return`#/demo/datetime-range`;case`demo-mood`:return`#/demo/mood`;case`demo-mood-record`:return`#/demo/mood-record`;case`demo-sleep-mood`:return`#/demo/sleep-mood`}}var s=`input_`,c=`freedbt_settings`,l=`freedbt_google_token`,u=`freedbt`,d=`fills`,f=`fsa_handle`,p=`custom`,m=`freedbt_custom.json`,h=[`mon`,`tue`,`wed`,`thu`,`fri`,`sat`,`sun`],g={mon:`Monday`,tue:`Tuesday`,wed:`Wednesday`,thu:`Thursday`,fri:`Friday`,sat:`Saturday`,sun:`Sunday`},_={mon:`M`,tue:`T`,wed:`W`,thu:`Th`,fri:`F`,sat:`S`,sun:`Su`},v=`1008660441251-bqhj6olmvkpcpftm362o8c02sts6c36m.apps.googleusercontent.com`,y=`https://www.googleapis.com/drive/v3`,b=`https://www.googleapis.com/upload/drive/v3`,x=`https://www.googleapis.com/auth/drive.appdata`,ee=`_deletions.json`,S=`freedbt_mood_records.json`,te=`mood_records`,C=`freedbt_synced_settings.json`,w=`synced_settings`,ne=`sleep_records.json`,re=`sleep_records`;function T(e,t=3){return`<textarea id="${s}${e}" name="${e}" rows="${t}" class="form-textarea"></textarea>`}function ie(e,t=2,n=``){return`<textarea id="${s}${e}" name="${e}" rows="${t}"${n?` placeholder="${n}"`:``} class="form-textarea form-textarea-auto"></textarea>`}function E(e,t=``,n=!1){return n?`<input type="text" id="${s}${e}" name="${e}" placeholder="${t}" class="form-input form-input-auto" style="min-width:${Math.max(t.length,3)}ch">`:`<input type="text" id="${s}${e}" name="${e}" placeholder="${t}" class="form-input">`}function D(e,t,n){return`<input type="number" id="${s}${e}" name="${e}" min="${t}" max="${n}" class="form-input form-input-number">`}function O(e){return`<input type="checkbox" id="${s}${e}" name="${e}" class="form-checkbox">`}function ae(e,t,n=`inline-radio-group`,r=`${n}-item`,i){let a=i?`<span class="${i}">`:`<span>`;return`<div class="${n}">${`
    <label class="${r}">
      ${a}·</span>
      <input type="radio" id="${s}${e}_none" name="${e}" value="">
    </label>`}${t.map(t=>`
    <label class="${r}">
      ${a}${t.label}</span>
      <input type="radio" id="${s}${e}_${t.value}" name="${e}" value="${t.value}">
    </label>`).join(``)}</div>`}function oe(e){return`<div class="day-radio-group">${h.map(t=>`
    <label class="day-radio">
      <span class="day-radio-label">${_[t]}</span>
      <input type="checkbox" id="${s}${e}_${t}" name="${e}_${t}" class="form-checkbox">
    </label>`).join(``)}</div>`}function se(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 5</h2>
      <p class="worksheet-ref">(Emotion Regulation Handouts 8, 8a) (p. 1 of 2)</p>
      <h3 class="worksheet-name">Check the Facts</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${E(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${E(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      It is hard to problem-solve an emotional situation if you don't have your facts straight.
      You must know what the problem is before you can solve it. This worksheet helps you figure
      out whether it is the event that is causing your emotion, your interpretation of the event,
      or both. Use your mindfulness skills of observing and describing. Observe the facts, and
      then describe the facts you have observed.
    </p>

    <fieldset class="worksheet-step">
      <legend>Step 1</legend>
      <p><strong>Ask: What emotion do I want to change?</strong></p>
      <div class="form-row">
        <label>EMOTION NAME: ${E(`emotion_name`)}</label>
      </div>
      <div class="form-row">
        <label>INTENSITY (0–100) Before: ${D(`intensity_before`,0,100)}</label>
        <label>After: ${D(`intensity_after`,0,100)}</label>
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 2</legend>
      <p><strong>Ask: What is the PROMPTING EVENT for my emotional reaction?</strong></p>
      <p>DESCRIBE THE PROMPTING EVENT: What happened that led you to have this emotion?
         Who did what to whom? What led up to what? What is it about this event that is
         a problem for you? Be very specific in your answers.</p>
      ${T(`step2_prompting_event`,4)}

      <div class="check-the-facts">
        <h4>CHECK THE FACTS!</h4>
        <p>Look for extremes and judgments in the way you are describing the prompting event.</p>
        <p><strong>REWRITE</strong> the facts, if necessary, to be more accurate.</p>
        ${T(`step2_rewrite`,3)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 3</legend>
      <p><strong>Ask: What are my INTERPRETATIONS (thoughts, beliefs, etc.) about the facts?</strong></p>
      <p>What am I assuming? Am I adding my own interpretations to the description of the prompting event?</p>
      ${T(`step3_interpretations`,3)}

      <div class="check-the-facts">
        <h4>CHECK THE FACTS!</h4>
        <p>List as many <em>other</em> possible interpretations of the facts as you can.</p>
        ${T(`step3_other_interpretations`,3)}
        <p><strong>REWRITE</strong> the facts, if necessary. Try to check the accuracy of your interpretations.
           If you can't check the facts, write out a likely or a useful (i.e., effective) interpretation.</p>
        ${T(`step3_rewrite`,3)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 4</legend>
      <p><strong>Ask: Am I assuming a THREAT?</strong> What is the THREAT? What about this event or
         situation is threatening to me? What worrisome consequences or outcomes am I expecting?</p>
      ${T(`step4_threat`,4)}

      <div class="check-the-facts">
        <h4>CHECK THE FACTS!</h4>
        <p>List as many <em>other</em> possible outcomes as you can, given the facts.</p>
        ${T(`step4_other_outcomes`,3)}
        <p><strong>REWRITE</strong> the facts if needed. Try to check the accuracy of your expectations.
           If you can't check out probable outcomes, write out a likely noncatastrophic outcome to expect.</p>
        ${T(`step4_rewrite`,3)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 5</legend>
      <p><strong>Ask: What's the CATASTROPHE, even if the outcome I am worrying about does occur?</strong>
         Describe in detail the worst outcome I can reasonably expect.</p>
      ${T(`step5_catastrophe`,3)}

      <p><strong>DESCRIBE WAYS TO COPE</strong> if the worst does happen.</p>
      ${T(`step5_ways_to_cope`,3)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 6</legend>
      <p><strong>ASK: Does my emotion (or its intensity or duration) FIT THE FACTS?</strong></p>
      <div class="form-row">
        <label>(0 = not at all to 5 = I am certain): ${D(`step6_fit_rating`,0,5)}</label>
      </div>
      <p>If you are unsure whether your emotion or your emotional intensity fits the facts
         (for example, you give a score of 2, 3, or 4), keep checking the facts. Be as creative
         as you can be; ask others for their opinions; or do an experiment to see if your
         predictions or interpretations are correct.</p>
      <p><strong>Describe what you did to check the facts:</strong></p>
      ${T(`step6_what_i_did`,3)}
    </fieldset>
  `}function ce(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 7</h2>
      <p class="worksheet-ref">(Emotion Regulation Handouts 10, 11)</p>
      <h3 class="worksheet-name">Opposite Action to Change Emotions</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${E(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${E(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Select a current or recent emotional reaction that you find painful or want to change.
      Figure out if the emotion fits the facts. If it does not, then notice your action urges;
      figure out what would be opposite actions; and then do the opposite actions <em>all the way</em>.
      Remember to practice opposite action <em>all the way</em>. Describe what happened.
    </p>

    <div class="form-row">
      <label>EMOTION NAME: ${E(`emotion_name`)}</label>
    </div>
    <div class="form-row">
      <label>INTENSITY (0–100) Before: ${D(`intensity_before`,0,100)}</label>
      <label>After: ${D(`intensity_after`,0,100)}</label>
    </div>

    <div class="form-section">
      <p><strong>PROMPTING EVENT for my emotion (who, what, when, where):</strong> What prompted the emotion?</p>
      ${T(`prompting_event`,3)}
    </div>

    <div class="form-section">
      <p><strong>IS MY EMOTION (or its intensity or duration) JUSTIFIED? Does it fit the facts? Is it effective?</strong></p>
      <p>List the facts that justify the emotion and those that do not. Check the answer that is mostly correct.</p>

      <div class="two-column-box">
        <div class="column-box">
          <h4 class="column-header">Justified</h4>
          ${T(`justified_facts`,3)}
          <p class="column-footer"><strong>JUSTIFIED: Go to problem solving</strong><br>(Emotion Regulation Worksheet 8)</p>
        </div>
        <div class="column-box">
          <h4 class="column-header">Not justified</h4>
          ${T(`not_justified_facts`,3)}
          <p class="column-footer"><strong>NOT JUSTIFIED: Continue</strong></p>
        </div>
      </div>
    </div>

    <div class="form-section">
      <p><strong>ACTION URGES:</strong> What do I feel like doing or saying?</p>
      ${T(`action_urges`,2)}
    </div>

    <div class="form-section">
      <p><strong>OPPOSITE ACTION:</strong> What are the actions opposite to my urges? What am I not doing because
         of my emotions? Describe both <em>what</em> and <em>how</em> to act opposite <strong>all the way</strong>
         in the situation.</p>
      ${T(`opposite_action`,3)}
    </div>

    <div class="form-section">
      <p><strong>WHAT I did:</strong> Describe in detail.</p>
      ${T(`what_i_did`,2)}
    </div>

    <div class="form-section">
      <p><strong>HOW I did it:</strong> Describe body language, facial expression, posture, gestures, and thoughts.</p>
      ${T(`how_i_did_it`,2)}
    </div>

    <div class="form-section">
      <p>What <strong>AFTEREFFECT</strong> did the opposite action have on me (my state of mind, other emotions,
         behavior, thoughts, memory, body, etc.)?</p>
      ${T(`aftereffect`,3)}
    </div>
  `}var le=7,ue=3;function de(){let e=(e,t)=>Array.from({length:ue},(n,r)=>`${E(`s${e}_${t}_${r+1}`)}`).join(``),t=Array.from({length:le},(e,t)=>`
      <tr>
        <td class="step-number">${t+1}.</td>
        <td>${E(`step6_describe_${t+1}`)}</td>
        <td class="step-done-cell">${O(`step6_done_${t+1}`)}</td>
        <td>${E(`step6_what_happened_${t+1}`)}</td>
      </tr>
    `).join(``);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 8</h2>
      <p class="worksheet-ref">(Emotion Regulation Handout 12) (p. 1 of 2)</p>
      <h3 class="worksheet-name">Problem Solving to Change Emotions</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${E(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${E(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Select a prompting event that triggers a painful emotion. Select an event that can be changed.
      Turn the event into a problem to be solved. Follow the steps below and describe what happened.
    </p>

    <div class="form-row">
      <label>EMOTION NAME: ${E(`emotion_name`)}</label>
    </div>
    <div class="form-row">
      <label>INTENSITY (0–100) Before: ${D(`intensity_before`,0,100)}</label>
      <label>After: ${D(`intensity_after`,0,100)}</label>
    </div>

    <fieldset class="worksheet-step">
      <legend>1</legend>
      <p><strong>WHAT IS THE PROBLEM?</strong> Describe the problem prompting your emotions.
         What makes the situation a problem?</p>
      ${T(`problem_description`,4)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>2</legend>
      <p><strong>CHECK THE FACTS TO MAKE SURE YOU HAVE THE RIGHT PROBLEM.</strong>
         Describe what you did to be sure of your facts.</p>
      <p class="worksheet-aside"><em>(See Emotion Regulation Worksheet 6 if you need help.)</em></p>
      ${T(`check_facts`,3)}

      <p><strong>REWRITE the problem</strong> if needed to stick with the facts.</p>
      ${T(`rewrite_problem`,2)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>3</legend>
      <p><strong>WHAT IS A REALISTIC SHORT-TERM GOAL OF YOUR PROBLEM SOLVING?</strong>
         What has to happen for you to think you have made progress?</p>
      ${T(`short_term_goal`,3)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>4</legend>
      <p><strong>BRAINSTORM SOLUTIONS:</strong> List as many solutions and coping strategies
         as you can think of. DON'T EVALUATE!</p>
      ${T(`brainstorm_solutions`,6)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>5</legend>
      <p><strong>WHICH TWO IDEAS LOOK BEST</strong> (are most likely to meet your goal, are possible to do)?</p>
      <div class="form-row">
        <label>1. ${E(`best_idea_1`)}</label>
        <label>2. ${E(`best_idea_2`)}</label>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-cons-column">
          <h4>Solution 1</h4>
          <div class="pros-section">
            <strong>PROS</strong>
            ${e(1,`pros`)}
          </div>
          <div class="cons-section">
            <strong>CONS</strong>
            ${e(1,`cons`)}
          </div>
        </div>
        <div class="pros-cons-column">
          <h4>Solution 2</h4>
          <div class="pros-section">
            <strong>PROS</strong>
            ${e(2,`pros`)}
          </div>
          <div class="cons-section">
            <strong>CONS</strong>
            ${e(2,`cons`)}
          </div>
        </div>
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>6</legend>
      <p><strong>CHOOSE</strong> the solution to try; list the steps needed; check the steps
         you do and how well they work.</p>
      <table class="steps-table">
        <thead>
          <tr>
            <th>Step</th>
            <th>Describe</th>
            <th>&#10003; Done</th>
            <th>What happened?</th>
          </tr>
        </thead>
        <tbody>
          ${t}
        </tbody>
      </table>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>7</legend>
      <p><strong>DID YOU REACH YOUR GOAL?</strong> If so, describe. If not, what can you do next?</p>
      ${T(`goal_reached`,3)}

      <p><strong>IS THERE NOW A NEW PROBLEM TO BE SOLVED?</strong> If yes, describe, and problem-solve again.</p>
      ${T(`new_problem`,3)}
    </fieldset>
  `}function fe(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 9</h2>
      <h3 class="worksheet-name">Steps for Reducing Vulnerability to Emotion Mind</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${E(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${E(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      For each emotion regulation skill, note whether you used it during the week, and describe what you did.
    </p>

    <fieldset class="worksheet-step">
      <legend>B — Mindfulness of Positive Experiences When They Occurred</legend>

      <div class="form-section">
        <p><strong>Focused (and refocused) attention on positive experiences:</strong></p>
        ${T(`mindful_positive_focus`,2)}
      </div>

      <div class="form-section">
        <p><strong>Distracted from worries if they showed up:</strong></p>
        ${T(`mindful_positive_distract`,2)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Build Mastery</legend>

      <div class="form-section">
        <p><strong>Scheduled activities to build a sense of accomplishment:</strong></p>
        ${oe(`mastery_sched`)}
        <p>Describe:</p>
        ${T(`mastery_sched_describe`,2)}
      </div>

      <div class="form-section">
        <p><strong>Actually did something difficult, BUT possible:</strong></p>
        ${oe(`mastery_difficult`)}
        <p>Describe:</p>
        ${T(`mastery_difficult_describe`,2)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>C — Cope Ahead</legend>

      <div class="form-section">
        <p><strong>Describe a situation that prompts unwanted emotions</strong>
        <span class="worksheet-aside">(fill out Steps 1 and 2 of checking the facts on Emotion Regulation Worksheet 5 if necessary)</span>:</p>
        ${T(`cope_ahead_situation`,3)}
      </div>

      <div class="form-section">
        <p><strong>Way that I imagined coping effectively (describe):</strong></p>
        ${T(`cope_ahead_coping`,3)}
      </div>

      <div class="form-section">
        <p><strong>Way that I imagined coping with new problems that might arise (describe):</strong></p>
        ${T(`cope_ahead_new_problems`,3)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>PLEASE Skills — Have I…</legend>

      <div class="form-section">
        <p><strong>Treated Physica<u>L</u> illness?</strong></p>
        ${T(`please_physical_illness`,2)}
      </div>

      <div class="form-section">
        <p><strong>Balanced <u>E</u>ating?</strong></p>
        ${T(`please_eating`,2)}
      </div>

      <div class="form-section">
        <p><strong><u>A</u>voided mood-Altering substances?</strong></p>
        ${T(`please_substances`,2)}
      </div>

      <div class="form-section">
        <p><strong>Balanced <u>S</u>leep?</strong></p>
        ${T(`please_sleep`,2)}
      </div>

      <div class="form-section">
        <p><strong><u>E</u>xercised?</strong></p>
        ${T(`please_exercise`,2)}
      </div>
    </fieldset>
  `}function pe(e){return e.includes(`
`)?`"""\n${e.replace(/\\/g,`\\\\`).replace(/"""/g,`\\"\\"\\"`)}"""`:`"${e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`).replace(/\t/g,`\\t`).replace(/\r/g,`\\r`)}"`}function me(e){if(e.startsWith(`"""`)){let t=e.slice(3,-3);return t.startsWith(`
`)&&(t=t.slice(1)),t.replace(/\\"/g,`"`).replace(/\\\\/g,`\\`)}return e.startsWith(`"`)?e.slice(1,-1).replace(/\\t/g,`	`).replace(/\\r/g,`\r`).replace(/\\n/g,`
`).replace(/\\"/g,`"`).replace(/\\\\/g,`\\`):e}function he(e){let t=[];for(let[n,r]of Object.entries(e))typeof r==`boolean`||typeof r==`number`?t.push(`${n} = ${r}`):t.push(`${n} = ${pe(r)}`);return t.join(`
`)+`
`}function ge(e){let t={},n=e.split(`
`),r=0;for(;r<n.length;){let e=n[r].trim();if(r++,e===``||e.startsWith(`#`))continue;let i=e.indexOf(`=`);if(i===-1)continue;let a=e.slice(0,i).trim(),o=e.slice(i+1).trim();if(o.startsWith(`"""`)){if(o.endsWith(`"""`)&&o.length>6){t[a]=me(o);continue}let e=[o];for(;r<n.length;){let t=n[r];if(r++,e.push(t),t.trimEnd().endsWith(`"""`))break}t[a]=me(e.join(`
`));continue}if(o===`true`){t[a]=!0;continue}if(o===`false`){t[a]=!1;continue}if(/^-?\d+(\.\d+)?$/.test(o)){t[a]=Number(o);continue}if(o.startsWith(`"`)&&o.endsWith(`"`)){t[a]=me(o);continue}t[a]=o}return t}function k(e=new Date){let t=e.getTimezoneOffset(),n=t<=0?`+`:`-`,r=Math.abs(t),i=String(Math.floor(r/60)).padStart(2,`0`),a=String(r%60).padStart(2,`0`);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}T${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}.${String(e.getMilliseconds()).padStart(3,`0`)}${n}${i}:${a}`}function _e(e,t){return new Date(e).getTime()-new Date(t).getTime()}var ve=`modulepreload`,ye=function(e){return`/freedbt/`+e},be={},xe=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=ye(t,n),t in be)return;be[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ve,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Se={persistenceBackend:we()?`fsa`:`indexeddb`,fsaDirectoryChosen:!1,syncEnabled:!1,lastSyncedAt:null,googleEmail:null};function A(){let e=localStorage.getItem(c);if(!e)return{...Se};try{let t=JSON.parse(e);return{...Se,...t}}catch{return{...Se}}}function Ce(e){localStorage.setItem(c,JSON.stringify(e))}function we(){return`showDirectoryPicker`in window}function Te(){return new Promise((e,t)=>{let n=indexedDB.open(u,1);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(`fills`)||e.createObjectStore(d),e.objectStoreNames.contains(`fsa_handle`)||e.createObjectStore(f),e.objectStoreNames.contains(`custom`)||e.createObjectStore(p)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(Error(`IndexedDB open failed: ${n.error?.message}`))})}function j(e,t){return Te().then(n=>new Promise((r,i)=>{let a=n.transaction(e,`readonly`).objectStore(e).get(t);a.onsuccess=()=>r(a.result),a.onerror=()=>i(Error(`IDB get failed: ${a.error?.message}`))}))}function M(e,t,n){return Te().then(r=>new Promise((i,a)=>{let o=r.transaction(e,`readwrite`).objectStore(e).put(n,t);o.onsuccess=()=>i(),o.onerror=()=>a(Error(`IDB put failed: ${o.error?.message}`))}))}function Ee(e,t){return Te().then(n=>new Promise((r,i)=>{let a=n.transaction(e,`readwrite`).objectStore(e).delete(t);a.onsuccess=()=>r(),a.onerror=()=>i(Error(`IDB delete failed: ${a.error?.message}`))}))}function De(e){return Te().then(t=>new Promise((n,r)=>{let i=t.transaction(e,`readonly`).objectStore(e).getAllKeys();i.onsuccess=()=>n(i.result),i.onerror=()=>r(Error(`IDB getAllKeys failed: ${i.error?.message}`))}))}function Oe(e){return Te().then(t=>new Promise((n,r)=>{let i=t.transaction(e,`readonly`),a=i.objectStore(e),o=a.getAllKeys(),s=a.getAll();i.oncomplete=()=>{let e=o.result,t=s.result;n(e.map((e,n)=>({key:e,value:t[n]})))},i.onerror=()=>r(Error(`IDB getAll failed: ${i.error?.message}`))}))}var N=null;async function ke(){let e=await window.showDirectoryPicker({mode:`readwrite`});N=e,await M(f,`directory`,e);let t=A();t.fsaDirectoryChosen=!0,t.persistenceBackend=`fsa`,Ce(t);let n=await Ae(e);return n>0&&console.log(`Migrated ${n} existing fill(s) from browser storage to chosen folder`),e}async function Ae(e){let t=await Oe(d),n=0;for(let{key:r,value:i}of t)if(r.endsWith(`.toml`)){try{await e.getFileHandle(r);continue}catch{}try{let t=await(await e.getFileHandle(r,{create:!0})).createWritable();await t.write(i),await t.close(),n++}catch(e){console.error(`Failed to migrate ${r} to FSA directory:`,e)}}return n}async function P(){if(N)return await N.queryPermission({mode:`readwrite`})===`granted`||await N.requestPermission({mode:`readwrite`})===`granted`?N:(N=null,null);let e=await j(f,`directory`);if(!e)return null;if(await e.queryPermission({mode:`readwrite`})===`granted`)return N=e,e;try{if(await e.requestPermission({mode:`readwrite`})===`granted`)return N=e,e}catch{}return null}function je(e,t){return`${e}_${t}.toml`}function Me(e){let t=e.match(/^(.+)_(\d{4}-\d{2}-\d{2})\.toml$/);return t?{formId:t[1],date:t[2]}:null}function Ne(e){let t={_form_id:e.metadata.form_id,_date:e.metadata.date,_completed:e.metadata.completed,_created_at:e.metadata.created_at,_updated_at:e.metadata.updated_at};for(let[n,r]of Object.entries(e.data))t[n]=r;return he(t)}function F(e){let t=ge(e),n={form_id:String(t._form_id??``),date:String(t._date??``),completed:t._completed===!0,created_at:String(t._created_at??``),updated_at:String(t._updated_at??``)},r={};for(let[e,n]of Object.entries(t))e.startsWith(`_`)||(r[e]=String(n));return{metadata:n,data:r}}function I(){return A().persistenceBackend}async function Pe(e){let t=Ne(e),n=je(e.metadata.form_id,e.metadata.date);if(I()===`fsa`){let e=await P();if(e){let r=await(await e.getFileHandle(n,{create:!0})).createWritable();await r.write(t),await r.close(),Fe(n,t);return}}await M(d,n,t),Fe(n,t)}function Fe(e,t){xe(async()=>{let{scheduleSingleUpload:e}=await Promise.resolve().then(()=>nr);return{scheduleSingleUpload:e}},void 0).then(({scheduleSingleUpload:n})=>{n(e,t)}).catch(()=>{})}async function Ie(e,t){let n=je(e,t);if(I()===`fsa`){let e=await P();if(e)try{return F(await(await(await e.getFileHandle(n)).getFile()).text())}catch{return null}}let r=await j(d,n);return r?F(r):null}async function Le(e,t){let n=je(e,t);if(I()===`fsa`){let e=await P();if(e){try{await e.removeEntry(n)}catch{}Re(n);return}}await Ee(d,n),Re(n)}function Re(e){xe(async()=>{let{syncDeletion:e}=await Promise.resolve().then(()=>nr);return{syncDeletion:e}},void 0).then(({syncDeletion:t})=>{t(e)}).catch(()=>{})}async function ze(){let e=[];if(I()===`fsa`){let t=await P();if(t){for await(let[n,r]of t.entries())if(!(r.kind!==`file`||!n.endsWith(`.toml`))&&Me(n))try{let t=await(await r.getFile()).text();e.push(F(t))}catch{}return e.sort((e,t)=>t.metadata.date.localeCompare(e.metadata.date))}}let t=await Oe(d);for(let{key:n,value:r}of t)if(n.endsWith(`.toml`))try{e.push(F(r))}catch{}return e.sort((e,t)=>t.metadata.date.localeCompare(e.metadata.date))}async function Be(){let e=[];if(I()===`fsa`){let t=await P();if(t){for await(let[n,r]of t.entries()){if(r.kind!==`file`||!n.endsWith(`.toml`))continue;let t=await(await r.getFile()).text();e.push({filename:n,content:t})}return e}}let t=await Oe(d);for(let{key:n,value:r}of t)e.push({filename:n,content:r});return e}async function Ve(e){let t=0;for(let{filename:n,content:r}of e)if(n.endsWith(`.toml`))try{if(F(r),I()===`fsa`){let e=await P();if(e){let i=await(await e.getFileHandle(n,{create:!0})).createWritable();await i.write(r),await i.close(),t++;continue}}await M(d,n,r),t++}catch{}return t}function He(e){let t={};for(let[n,r]of Object.entries(e.data))r!==``&&r!==`false`&&(t[n]=r);return{metadata:e.metadata,data:t}}async function Ue(){return(await Be()).map(({filename:e,content:t})=>({filename:e,content:Ne(He(F(t)))}))}async function We(){let e=await De(d);for(let t of e)await Ee(d,t)}var L={};function Ge(){return JSON.stringify({_doc:`freedbt diary card customization. Keys starting with _ are ignored.`,_updated_at:k(),_daily_group_keys:`urges emotions drugs actions`,_daily_column_keys:`urge_use urge_suicide urge_self_harm emo_sad emo_shame emo_anger emo_fear emo_joy drug_illicit_count drug_illicit_specify drug_alcohol_count drug_alcohol_specify drug_meds_count drug_meds_specify act_self_harm act_lies act_anger_behaviours act_isolate act_avoid skills_used reinforcement`,_before_after_keys:`urge_use urge_suicide urge_self_harm belief_control_emotions belief_control_behaviours belief_control_thoughts`,hide_daily_groups:[],hide_daily_columns:[],hide_before_after:[]},null,2)}function Ke(e){if(!e||typeof e!=`object`)return{};let t=e,n={};return Array.isArray(t.hide_daily_groups)&&(n.hide_daily_groups=t.hide_daily_groups.filter(e=>typeof e==`string`)),Array.isArray(t.hide_daily_columns)&&(n.hide_daily_columns=t.hide_daily_columns.filter(e=>typeof e==`string`)),Array.isArray(t.hide_before_after)&&(n.hide_before_after=t.hide_before_after.filter(e=>typeof e==`string`)),n}async function qe(){try{if(I()===`fsa`){let e=await P();if(e){let t;try{t=await(await(await e.getFileHandle(m)).getFile()).text()}catch{t=Ge();let n=await(await e.getFileHandle(m,{create:!0})).createWritable();await n.write(t),await n.close()}return L=Ke(JSON.parse(t)),L}}else{let e=await j(p,`config`);if(e)return L=Ke(JSON.parse(e)),L}}catch{}return L={},L}function Je(){return L}async function Ye(){try{if(I()===`fsa`){let e=await P();if(e)return await(await(await e.getFileHandle(m)).getFile()).text()}else return await j(`custom`,`config`)??null}catch{}return null}async function Xe(e){if(I()===`fsa`){let t=await P();if(t){let n=await(await t.getFileHandle(m,{create:!0})).createWritable();await n.write(e),await n.close()}}else await M(p,`config`,e);try{L=Ke(JSON.parse(e))}catch{L={}}}async function Ze(){try{if(I()===`fsa`){let e=await P();if(e)try{return await(await(await e.getFileHandle(S)).getFile()).text()}catch{return null}}return await j(`custom`,`mood_records`)??null}catch{return null}}async function Qe(e){if(I()===`fsa`){let t=await P();if(t){let n=await(await t.getFileHandle(S,{create:!0})).createWritable();await n.write(e),await n.close();return}}await M(p,te,e)}async function R(){let e=await Ze();if(e)try{return JSON.parse(e)}catch{return[]}return[]}async function $e(e){await Qe(JSON.stringify(e,null,2)),tt()}async function et(e){let t=await R();t.push(e),await $e(t)}function tt(){xe(async()=>{let{scheduleMergeSync:e}=await Promise.resolve().then(()=>nr);return{scheduleMergeSync:e}},void 0).then(({scheduleMergeSync:e})=>{e(S)}).catch(()=>{})}var nt={autosaveEnabled:!0,fillsSortBy:`updated_at`,fillsGroupByChapter:!1,fillsHideCompleted:!1},z={...nt};function rt(e){if(!e||typeof e!=`object`)return{};let t=e,n={};return typeof t.autosaveEnabled==`boolean`&&(n.autosaveEnabled=t.autosaveEnabled),(t.fillsSortBy===`updated_at`||t.fillsSortBy===`created_at`)&&(n.fillsSortBy=t.fillsSortBy),typeof t.fillsGroupByChapter==`boolean`&&(n.fillsGroupByChapter=t.fillsGroupByChapter),typeof t.fillsHideCompleted==`boolean`&&(n.fillsHideCompleted=t.fillsHideCompleted),n}async function it(){try{if(I()===`fsa`){let e=await P();if(e)try{return await(await(await e.getFileHandle(C)).getFile()).text()}catch{return null}}return await j(`custom`,`synced_settings`)??null}catch{return null}}async function at(e){if(I()===`fsa`){let t=await P();if(t){let n=await(await t.getFileHandle(C,{create:!0})).createWritable();await n.write(e),await n.close();return}}await M(p,w,e)}async function ot(){let e=await it();if(e)try{return z={...nt,...rt(JSON.parse(e))},z}catch{}let t=localStorage.getItem(c);if(t)try{let e=JSON.parse(t);if(e.ui){z={...nt,...rt(e.ui)};let t={_updated_at:k(),...z};return await at(JSON.stringify(t,null,2)),z}}catch{}return z={...nt},z}async function st(e){let t={_updated_at:k(),...e};await at(JSON.stringify(t,null,2)),z={...e},ct()}function ct(){xe(async()=>{let{scheduleSyncedSettingsUpload:e}=await Promise.resolve().then(()=>nr);return{scheduleSyncedSettingsUpload:e}},void 0).then(({scheduleSyncedSettingsUpload:e})=>{e()}).catch(()=>{})}async function lt(){try{if(I()===`fsa`){let e=await P();if(e)try{return await(await(await e.getFileHandle(ne)).getFile()).text()}catch{}}return await j(`custom`,`sleep_records`)??null}catch{return null}}async function ut(e){if(I()===`fsa`){let t=await P();if(t){let n=await(await t.getFileHandle(ne,{create:!0})).createWritable();await n.write(e),await n.close();return}}await M(p,re,e)}async function dt(){let e=await lt();if(e)try{return JSON.parse(e)}catch{return null}return null}var ft=[`😭`,`😞`,`🙁`,`😐`,`🙂`,`😁`,`🤩`];function pt(e){let{btwPoints:t,modal:n,onChange:r}=e,i=e.initialMood?{phase:`range`,lo:e.initialMood[0],hi:e.initialMood[1]}:{phase:`none`},a=document.createElement(`div`);a.className=`mood-sel`;let o=document.createElement(`div`);o.className=t?`mood-sel-track`:`mood-sel-track mood-sel-track-spaced`;let s=document.createElement(`div`);s.className=`mood-sel-bar`;let c=new Map;for(let e=0;e<ft.length;e++){if(t&&e>0){let t=document.createElement(`span`);t.className=`mood-sel-btw`,t.dataset.value=String(e-.5),o.appendChild(t),c.set(e-.5,t)}let n=document.createElement(`span`);n.className=`mood-sel-point`,n.textContent=ft[e],n.dataset.value=String(e),o.appendChild(n),c.set(e,n)}o.appendChild(s),a.appendChild(o);function l(e){let t=e.target.closest(`[data-value]`);if(!t)return;let i=parseFloat(t.dataset.value);n?d(i):u(i),f(),r?.(p())}function u(e){i=i.phase===`range`&&i.lo===e&&i.hi===e?{phase:`none`}:{phase:`range`,lo:e,hi:e}}function d(e){switch(i.phase){case`none`:i={phase:`first`,start:e};break;case`first`:i={phase:`range`,lo:Math.min(i.start,e),hi:Math.max(i.start,e)};break;case`range`:i=e>=i.lo&&e<=i.hi?{phase:`none`}:{phase:`first`,start:e};break}}function f(){let e=p();if(!e){s.style.opacity=`0`;return}let[t,n]=e,r=c.get(t),i=c.get(n);if(!r||!i){s.style.opacity=`0`;return}s.style.left=`${r.offsetLeft}px`,s.style.width=`${i.offsetLeft+i.offsetWidth-r.offsetLeft}px`,s.style.opacity=`1`}function p(){switch(i.phase){case`none`:return null;case`first`:return[i.start,i.start];case`range`:return[i.lo,i.hi]}}if(o.addEventListener(`click`,l),e.initialMood){let e=new ResizeObserver(()=>{f(),e.disconnect()});e.observe(a)}return{element:a,getValue:p,destroy(){o.removeEventListener(`click`,l),a.innerHTML=``}}}var mt=200,B=mt/2,V=mt/2,ht=88,gt=86,_t=73,vt=79,yt=60,bt=78,xt=gt,St=15;function Ct(e,t){return Math.round(e/t)*t%60}function wt(e){return e/60*2*Math.PI-Math.PI/2}function H(e,t,n){return e+t*Math.cos(n)}function U(e,t,n){return e+t*Math.sin(n)}function Tt(e){return e.toString().padStart(2,`0`)}function Et(e,t){if(t)return Tt(e);let n=e%12||12;return n>=10?n.toString():`${n}${e<12?`a`:`p`}`}function Dt(e){let{minuteResolution:t,hour24:n,hourGridDims:r,maxClockDiameter:i,vertHours:a,onChange:o}=e,[s,c]=r;if(s*c!==24)throw Error(`hourGridDims must multiply to 24, got ${s}×${c}`);if(60%t!=0)throw Error(`minuteResolution must divide 60, got ${t}`);let l=Ct(e.initDatetime.getMinutes(),t),u=e.initDatetime.getHours(),d=e.initDatetime.getFullYear(),f=e.initDatetime.getMonth(),p=e.initDatetime.getDate(),m=document.createElement(`div`);m.className=`dtp`,_();function h(){return new Date(d,f,p,u,l,0,0)}function g(){o?.(h())}function _(){let e=`<div class="dtp-clock-wrap" style="${i==null?``:`max-width:${i}px;margin:0 auto`}">${v()}</div>`,t=`<div class="dtp-hgrid" style="grid-template-columns:repeat(${c},1fr)">${y()}</div>`,n=`<div class="dtp-daterow"><button class="dtp-datebtn dtp-prev" aria-label="Previous day">◀</button><span class="dtp-datetext">${Tt(p)} / ${Tt(f+1)} / ${d}</span><button class="dtp-datebtn dtp-next" aria-label="Next day">\u25B6</button></div>`;a?m.innerHTML=`<div class="dtp-vert-row">${e}${t}</div>`+n:m.innerHTML=e+t+n,b()}function v(){let e=[];e.push(`<circle cx="${B}" cy="${V}" r="${ht}" class="dtp-face"/>`);for(let t=0;t<60;t+=5){let n=wt(t);e.push(`<line x1="${H(B,_t,n)}" y1="${U(V,_t,n)}" x2="${H(B,gt,n)}" y2="${U(V,gt,n)}" class="dtp-tick dtp-tick-maj"/>`),e.push(`<text x="${H(B,yt,n)}" y="${U(V,yt,n)}" text-anchor="middle" dominant-baseline="central" class="dtp-lbl">${Tt(t)}</text>`)}if(t<5)for(let n=0;n<60;n+=t){if(n%5==0)continue;let t=wt(n);e.push(`<line x1="${H(B,vt,t)}" y1="${U(V,vt,t)}" x2="${H(B,gt,t)}" y2="${U(V,gt,t)}" class="dtp-tick"/>`)}let n=wt(l);return e.push(`<line x1="${B}" y1="${V}" x2="${H(B,bt,n)}" y2="${U(V,bt,n)}" class="dtp-hand"/>`,`<circle cx="${B}" cy="${V}" r="3" class="dtp-cdot"/>`,`<circle cx="${H(B,xt,n)}" cy="${U(V,xt,n)}" r="5" class="dtp-sdot"/>`),`<svg class="dtp-svg" viewBox="0 0 ${mt} ${mt}">${e.join(``)}</svg>`}function y(){let e=new Date().getHours(),t=[];for(let r=0;r<24;r++){let i=r,a=[`dtp-hcell`];i===u&&a.push(`dtp-hsel`),i===e&&a.push(`dtp-hnow`),t.push(`<button class="${a.join(` `)}" data-h="${i}">${Et(i,n)}</button>`)}return t.join(``)}function b(){let e=m.querySelector(`.dtp-svg`);e?.addEventListener(`click`,n=>{let r=e.getBoundingClientRect(),i=mt/r.width,a=(n.clientX-r.left)*i-B,o=(n.clientY-r.top)*i-V,s=Math.sqrt(a*a+o*o);if(s<St||s>ht+5)return;let c=Math.atan2(o,a)+Math.PI/2;c<0&&(c+=2*Math.PI),l=Ct(c/(2*Math.PI)*60,t),_(),g()});for(let e of m.querySelectorAll(`.dtp-hcell`))e.addEventListener(`click`,()=>{u=parseInt(e.dataset.h,10),_(),g()});m.querySelector(`.dtp-prev`)?.addEventListener(`click`,()=>x(-1)),m.querySelector(`.dtp-next`)?.addEventListener(`click`,()=>x(1))}function x(e){let t=new Date(d,f,p+e);d=t.getFullYear(),f=t.getMonth(),p=t.getDate(),_(),g()}return{element:m,getDatetime:h,destroy(){m.innerHTML=``}}}function Ot(e){let{initDatetime:t,initBackMinutes:n,stackThresholdPx:r,onChange:i,minuteResolution:a,hour24:o,hourGridDims:s,maxClockDiameter:c,vertHours:l}=e,u=new Date(t.getTime()-n*6e4);function d(){i?.(f.getDatetime(),p.getDatetime())}let f=Dt({initDatetime:u,minuteResolution:a,hour24:o,hourGridDims:s,maxClockDiameter:c,vertHours:l,onChange:()=>d()}),p=Dt({initDatetime:t,minuteResolution:a,hour24:o,hourGridDims:s,maxClockDiameter:c,vertHours:l,onChange:()=>d()}),m=document.createElement(`div`);m.className=`dtp-range dtp-range-stacked`;let h=document.createElement(`div`);h.className=`dtp-range-panel`;let g=document.createElement(`div`);g.className=`dtp-range-label`,g.textContent=`From`,h.appendChild(g),h.appendChild(f.element);let _=document.createElement(`div`);_.className=`dtp-range-panel`;let v=document.createElement(`div`);v.className=`dtp-range-label`,v.textContent=`To`,_.appendChild(v),_.appendChild(p.element),m.appendChild(h),m.appendChild(_);let y=new ResizeObserver(e=>{for(let t of e){let e=t.contentBoxSize[0].inlineSize;m.classList.toggle(`dtp-range-stacked`,e<r)}});return y.observe(m),{element:m,getFrom:()=>f.getDatetime(),getTo:()=>p.getDatetime(),destroy(){y.disconnect(),f.destroy(),p.destroy(),m.innerHTML=``}}}function kt(e,t){let n=Math.round(Math.abs(t-e)/6e4);if(n<60)return`${n} minute${n===1?``:`s`}`;let r=Math.round(n/6)/10;return`${r} hour${r===1?``:`s`}`}function At(e,t){let n=e.getHours(),r=e.getMinutes(),i=String(r).padStart(2,`0`);if(t)return`${n}:${i}`;let a=n>=12?`pm`:`am`;return`${n%12||12}:${i}${a}`}function jt(e,t,n,r,i){let a=``;if(e){let[t,n]=e;a+=t===n?`Mood ${t}`:`Mood ${t}-${n}`}else a+=`No mood`;let o=kt(t,n);return a+=`, ${o} from ${At(new Date(t),r)}`,i?a+`. `:a+`.`}function Mt(e,t,n,r){let i=document.createElement(`div`);i.className=`mood-rec-preview`;let a=new Date(n.from),o=new Date(n.to),s=a.toLocaleDateString(`en`,{month:`short`,day:`numeric`}),c=document.createElement(`span`);c.className=`mood-rec-ptext`;let l=t.length>0;if(c.textContent=`${s}: ${jt(e,a.getTime(),o.getTime(),r,l)}`,i.appendChild(c),t){let e=document.createElement(`span`);e.className=`mood-rec-note`,e.textContent=t,i.appendChild(e)}return i}function Nt(e){let{mood_opt:t,time_opt:n,onAdd:r,onCancel:i,initialNote:a}=e,o=n.hour24,s=a??``,c=!!a,l=pt({...t,onChange:()=>b()}),u=Ot({...n,onChange:()=>b()}),d=document.createElement(`div`);d.className=`mood-rec`;let f=document.createElement(`div`);f.className=`mood-rec-mood`,f.appendChild(l.element);let p=document.createElement(`div`);p.className=`mood-rec-preview`;let m=document.createElement(`span`);m.className=`mood-rec-ptext`;let h=document.createElement(`span`);h.className=`mood-rec-note`,h.contentEditable=`true`,h.textContent=c?s:`note`,h.style.display=c?``:`none`,h.addEventListener(`input`,()=>{s=h.textContent||``}),h.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),h.blur())}),h.addEventListener(`paste`,e=>{e.preventDefault();let t=e.clipboardData?.getData(`text/plain`)??``;document.execCommand(`insertText`,!1,t),s=h.textContent||``});let g=document.createElement(`button`);g.className=`mood-rec-note-tog`,g.textContent=c?`×`:`+`,g.title=c?`Remove note`:`Add note`,g.addEventListener(`click`,()=>{if(c)c=!1,s=``,h.textContent=`note`,h.style.display=`none`,g.textContent=`+`,g.title=`Add note`;else{c=!0,s=`note`,h.style.display=``,g.textContent=`×`,g.title=`Remove note`,h.focus();let e=document.createRange();e.selectNodeContents(h);let t=window.getSelection();t?.removeAllRanges(),t?.addRange(e)}b()});let _=document.createElement(`button`);_.className=`mood-rec-btn mood-rec-btn-add`,_.textContent=`add`,_.addEventListener(`click`,()=>r?.(x()));let v=document.createElement(`button`);v.className=`mood-rec-btn mood-rec-btn-cancel`,v.textContent=`cancel`,v.addEventListener(`click`,()=>i?.()),p.appendChild(m),p.appendChild(h),p.appendChild(g),p.appendChild(_),p.appendChild(v);let y=document.createElement(`div`);y.className=`mood-rec-dt`,y.appendChild(u.element),d.appendChild(f),d.appendChild(p),d.appendChild(y);function b(){let e=l.getValue(),t=u.getFrom(),n=u.getTo();m.textContent=jt(e,t.getTime(),n.getTime(),o,c)}b();function x(){return{note:c?s:``,mood:l.getValue(),dtrange:{from:u.getFrom(),to:u.getTo()}}}return{element:d,getValue:x,destroy(){l.destroy(),u.destroy(),d.innerHTML=``}}}function Pt(e,t,n={}){let r=n.hour24??!1,i=n.emptyMessage??`No mood records saved.`,a=t.filter(e=>!e.tombstoned_at);if(e.innerHTML=``,a.length===0){e.textContent=i;return}for(let t of a){let n=Mt(t.mood,t.note,t.dtrange,r);e.appendChild(n)}}var W=900,G={top:10,right:30,bottom:45,left:55},Ft=50,It=22,Lt=280,Rt=12,zt=7,Bt=30,K=864e5,Vt=W-G.left-G.right;function Ht(e){return e?`hsl(${(e[0]+e[1])/2/5*120}, 60%, 52%)`:`#aaa`}function Ut(e){return k(new Date(e)).slice(0,10)}function Wt(e){let t=typeof e==`number`?new Date(e):e;return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()}function Gt(e,t){return e.map((n,r)=>{let i=e.slice(Math.max(0,r-t+1),r+1);return{date:n.date,hours:i.reduce((e,t)=>e+t.hours,0)/i.length}})}function Kt(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function qt(e){return e.map(e=>({date:Wt(e.endTime),hours:e.minutesAsleep/60}))}function Jt(e,t,n,r,i,a){let{moodLaneH:o,chartH:s}=a,c=s-G.top-G.bottom,l=o+s,u=e.filter(e=>e.date>=n&&e.date<=r);if(u.length===0)return`<p style="color:#888">No data in selected range.</p>`;let d=t.filter(e=>{let t=new Date(e.dtrange.from).getTime();return new Date(e.dtrange.to).getTime()>n&&t<r}),f=i>0?Gt(u,i):[],p=r-n,m=p/K,h=e=>G.left+(e-n)/p*Vt,g=e=>o+G.top+c-e/Rt*c,_=[];if(_.push(`<svg viewBox="0 0 ${W} ${l}" style="width:100%;max-width:${W}px;height:auto;font-family:system-ui,sans-serif;font-size:11px">`),o>0){let e=(o-It)/2;for(let t of d){let i=Math.max(new Date(t.dtrange.from).getTime(),n),a=Math.min(new Date(t.dtrange.to).getTime(),r),o=h(i),s=Math.max(6,h(a)-o),c=t.mood?`${t.mood[0]}\u2013${t.mood[1]}`:`?`,l=new Date(t.dtrange.from).toLocaleString(),u=new Date(t.dtrange.to).toLocaleString(),d=`${Kt(t.note)}\nMood: ${c}\n${l} \u2013 ${u}`;_.push(`<rect x="${o.toFixed(1)}" y="${e}" width="${s.toFixed(1)}" height="${It}" rx="8" ry="8" fill="${Ht(t.mood)}" opacity="0.75" style="cursor:pointer" data-mood-note="${Kt(t.note)}" data-mood-val="${c}" data-mood-range="${Kt(l)} \u2013 ${Kt(u)}"><title>${d}</title></rect>`)}_.push(`<text x="${G.left-5}" y="${o/2}" text-anchor="end" dominant-baseline="middle" fill="#777" font-size="10">Mood</text>`),_.push(`<line x1="${G.left}" y1="${o}" x2="${W-G.right}" y2="${o}" stroke="#ddd"/>`)}for(let e=0;e<=Rt;e+=2){let t=g(e);_.push(`<line x1="${G.left}" y1="${t.toFixed(1)}" x2="${W-G.right}" y2="${t.toFixed(1)}" stroke="#f0f0f0"/>`),_.push(`<text x="${G.left-8}" y="${t.toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#888">${e}h</text>`)}let v=m>90?14:m>30?7:m>14?3:1;for(let e=0;e<=m;e+=v){let t=n+e*K,r=h(t),i=new Date(t).toLocaleDateString(`en`,{month:`short`,day:`numeric`});_.push(`<line x1="${r.toFixed(1)}" y1="${o+G.top}" x2="${r.toFixed(1)}" y2="${g(0).toFixed(1)}" stroke="#f5f5f5"/>`),_.push(`<text x="${r.toFixed(1)}" y="${o+s-5}" text-anchor="middle" fill="#888" font-size="10">${i}</text>`)}if(f.length>1){let e=f.map((e,t)=>`${t===0?`M`:`L`}${h(e.date).toFixed(1)},${g(e.hours).toFixed(1)}`).join(` `);_.push(`<path d="${e}" fill="none" stroke="#3b82f6" stroke-width="2.5" opacity="0.7"/>`)}for(let e of u){let t=new Date(e.date).toLocaleDateString(`en`,{weekday:`short`,month:`short`,day:`numeric`});_.push(`<circle cx="${h(e.date).toFixed(1)}" cy="${g(e.hours).toFixed(1)}" r="3.5" fill="#3b82f6" opacity="0.5"><title>${t}: ${e.hours.toFixed(1)}h</title></circle>`)}_.push(`<line x1="${G.left}" y1="${o+G.top}" x2="${G.left}" y2="${g(0).toFixed(1)}" stroke="#ccc"/>`),_.push(`<line x1="${G.left}" y1="${g(0).toFixed(1)}" x2="${W-G.right}" y2="${g(0).toFixed(1)}" stroke="#ccc"/>`);let y=o+s/2;return _.push(`<text x="15" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="#666" font-size="11" transform="rotate(-90,15,${y})">Sleep (hours)</text>`),_.push(`</svg>`),_.join(`
`)}function Yt(e){let t=e.showMoodRecords,n=e.height??Lt,r=e.defaultRangeDays??Bt,i=e.showDateRangeControl??!0,a=e.showRollingAvgControl??!0,o=e.sleep,s=t?e.moods??[]:[],c=t?Ft:0,l=Wt(Date.now()),u=e.startDate??l-r*K,d=e.endDate??l+K,f=document.createElement(`div`);f.className=`sleep-mood-plot`;let p=new AbortController,{signal:m}=p,h=null,g=null,_=null;if(i||a){let e=document.createElement(`div`);if(e.style.cssText=`display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px`,i){let t=document.createElement(`label`);h=document.createElement(`input`),h.type=`date`,h.value=Ut(u),t.append(`From `,h);let n=document.createElement(`label`);g=document.createElement(`input`),g.type=`date`,g.value=Ut(d-K),n.append(`To `,g),e.append(t,n)}if(a){let t=document.createElement(`label`);_=document.createElement(`input`),_.type=`number`,_.value=String(zt),_.min=`0`,_.max=`30`,_.style.width=`50px`,t.append(`Rolling avg `,_,` days`),e.append(t)}f.appendChild(e)}let v=document.createElement(`div`);f.appendChild(v);let y=document.createElement(`div`);t&&(y.style.cssText=`min-height:20px;font-size:13px;color:#555;margin-top:4px`,f.appendChild(y));function b(){return h?new Date(h.value).getTime():u}function x(){return g?new Date(g.value).getTime()+K:d}function ee(){if(_){let e=parseInt(_.value,10);return isNaN(e)?zt:e}return zt}function S(){let e=b(),t=x();isNaN(e)||isNaN(t)||e>=t||(v.innerHTML=Jt(o,s,e,t,ee(),{moodLaneH:c,chartH:n}))}return h&&h.addEventListener(`change`,S,{signal:m}),g&&g.addEventListener(`change`,S,{signal:m}),_&&_.addEventListener(`input`,S,{signal:m}),t&&v.addEventListener(`click`,e=>{let t=e.target.closest?.(`rect[data-mood-note]`);t&&(y.textContent=`"${t.getAttribute(`data-mood-note`)??``}" \u2014 mood ${t.getAttribute(`data-mood-val`)??``} \u2014 ${t.getAttribute(`data-mood-range`)??``}`)},{signal:m}),S(),{element:f,destroy(){p.abort()}}}var Xt=[{key:`urges`,columns:[{key:`urge_use`,label:`Use
0-5`,type:`number`,min:0,max:5,group:`Urges`},{key:`urge_suicide`,label:`Suicide
0-5`,type:`number`,min:0,max:5,group:`Urges`},{key:`urge_self_harm`,label:`Self-Harm
0-5`,type:`number`,min:0,max:5,group:`Urges`}],label:`Urges to…`},{key:`emotions`,columns:[{key:`emo_sad`,label:`Sad
0-5`,type:`number`,min:0,max:5,group:`Emotions`},{key:`emo_shame`,label:`Shame
0-5`,type:`number`,min:0,max:5,group:`Emotions`},{key:`emo_anger`,label:`Anger
0-5`,type:`number`,min:0,max:5,group:`Emotions`},{key:`emo_fear`,label:`Fear
0-5`,type:`number`,min:0,max:5,group:`Emotions`},{key:`emo_joy`,label:`Joy
0-5`,type:`number`,min:0,max:5,group:`Emotions`}],label:`Emotions`},{key:`drugs`,columns:[{key:`drug_illicit_count`,label:`Illicit
#`,type:`number`,min:0,max:99,group:`Drugs`},{key:`drug_illicit_specify`,label:`Illicit
Specify`,type:`text`,group:`Drugs`},{key:`drug_alcohol_count`,label:`Alcohol
#`,type:`number`,min:0,max:99,group:`Drugs`},{key:`drug_alcohol_specify`,label:`Alcohol
Specify`,type:`text`,group:`Drugs`},{key:`drug_meds_count`,label:`Meds
#`,type:`number`,min:0,max:99,group:`Drugs`},{key:`drug_meds_specify`,label:`Meds
Specify`,type:`text`,group:`Drugs`}],label:`Drugs`},{key:`actions`,columns:[{key:`act_self_harm`,label:`Self-Harm
0-5`,type:`number`,min:0,max:5,group:`Actions`},{key:`act_lies`,label:`Lies
0-5`,type:`number`,min:0,max:5,group:`Actions`},{key:`act_anger_behaviours`,label:`Anger Behav.`,type:`number`,min:0,max:5,group:`Actions`},{key:`act_isolate`,label:`Isolate`,type:`number`,min:0,max:5,group:`Actions`},{key:`act_avoid`,label:`Avoid`,type:`number`,min:0,max:5,group:`Actions`},{key:`skills_used`,label:`Skills Used`,type:`number`,min:0,max:7,group:`Actions`},{key:`reinforcement`,label:`Reinforcement`,type:`textarea`,rows:1,group:`Actions`}],label:`Actions`}],Zt=[{value:0,abbrev:`!thought,!use`,description:`Not thought about or used`},{value:1,abbrev:`thought,!use,!want`,description:`Thought about, not used, didn't want to`},{value:2,abbrev:`thought,!use,want`,description:`Thought about, not used, wanted to`},{value:3,abbrev:`try,!could`,description:`Tried but couldn't use them`},{value:4,abbrev:`try,could,!help`,description:`Tried, could use them but they didn't help`},{value:5,abbrev:`try,could,help`,description:`Tried, could use them, helped`},{value:6,abbrev:`!try,use,!help`,description:`Didn't try, used them, didn't help`},{value:7,abbrev:`!try,use,help`,description:`Didn't try, used them, helped`}],Qt=[`1. Wise Mind`,`2. Observe: Just
Notice (Urge Surfing)`,`3. Describe: Put
Words On`,`4. Participate: Enter
into the Experience`,`5. Non-Judgmental
Stance`,`6. One-Mindfully:
In-the-Moment`,`7. Effectiveness:
Focus on What Works`,`8. Objective Effectiveness:
DEARMAN`,`9. Relationship Effectiveness:
GIVE`,`10. Self-Respect
Effectiveness: FAST`,`11. Observe and
Describe Emotions`,`12. Check the Facts`,`13. Opposite Action`,`14. Problem-Solving`,`15. ABC PLEASE`,`16. Mindfulness of
Current Emotions`,`17. Pros and Cons`,`18. STOP`,`19. TIPP`,`20. Distract 
(Wise Mind ACCEPTS)`,`21. Self-Soothe`,`22. IMPROVE the Moment`,`23. Radical Acceptance`,`24. Willingness`,`25. Mindfulness of
Current Thoughts`],$t=[{key:`urge_use`,label:`Urge to Use`},{key:`urge_suicide`,label:`Urge to Suicide`},{key:`urge_self_harm`,label:`Urge to Self-Harm`}],en=[{key:`belief_control_emotions`,label:`Belief in Control of Emotions`},{key:`belief_control_behaviours`,label:`Belief in Control of Behaviours`},{key:`belief_control_thoughts`,label:`Belief in Control of Thoughts`}];function tn(e,t){let n=`${s}day_${e}_${t.key}`;if(t.key===`skills_used`){let r=`<option value=""></option>`+Zt.map(e=>`<option value="${e.value}">${e.abbrev}</option>`).join(``);return`<select id="${n}" name="day_${e}_${t.key}" class="diary-cell-select">${r}</select>`}return t.type===`checkbox`?`<input type="checkbox" id="${n}" name="day_${e}_${t.key}" class="form-checkbox">`:t.type===`textarea`?`<textarea id="${n}" name="day_${e}_${t.key}" rows="${t.rows??2}" class="diary-cell-input diary-cell-text"></textarea>`:t.type===`number`?`<input type="number" id="${n}" name="day_${e}_${t.key}" min="${t.min}" max="${t.max}" class="diary-cell-input">`:`<input type="text" id="${n}" name="day_${e}_${t.key}" class="diary-cell-input diary-cell-text">`}function nn(e){let t=e.columns;return`
    <div class="diary-band">
      <table class="diary-table diary-band-table">
        <thead>
          <tr>${`<th colspan="${1+t.length}" class="group-header">${e.label}</th>`}</tr>
          <tr>${[`<th class="col-header">Day</th>`,...t.map(e=>`<th class="col-header col-header-${e.type}" title="${e.label}">${e.label.replace(/\n/g,`<br>`)}</th>`)].join(``)}</tr>
        </thead>
        <tbody>${h.map(e=>{let n=t.map(t=>`<td class="diary-cell">${tn(e,t)}</td>`).join(``);return`<tr><td class="day-label">${_[e]}</td>${n}</tr>`}).join(``)}</tbody>
      </table>
    </div>
  `}function rn(){let e=Je(),t=new Set(e.hide_daily_groups??[]),n=new Set(e.hide_daily_columns??[]),r=new Set(e.hide_before_after??[]),i=Xt.filter(e=>!t.has(e.key)).map(e=>({...e,columns:e.columns.filter(e=>!n.has(e.key))})).filter(e=>e.columns.length>0).map(nn).join(``),a=Zt.map(e=>`<div><dt>${e.value}</dt><dd>${e.description}</dd></div>`).join(`
          `),o=[...$t,...en].filter(e=>!r.has(e.key)),c=o.map(e=>`
      <tr>
        <td class="ba-label">${e.label}</td>
        <td><input type="number" id="${s}${e.key}_before" name="${e.key}_before" min="0" max="5" class="diary-cell-input"></td>
        <td><input type="number" id="${s}${e.key}_after" name="${e.key}_after" min="0" max="5" class="diary-cell-input"></td>
      </tr>
    `).join(``);return`
    <section class="diary-sheet" aria-label="Daily Tracking">
      <h3 class="diary-sheet-title">Daily Tracking</h3>
      <div class="diary-bands">
        ${i}
      </div>

      <div class="diary-notes-row">
        <div class="diary-notes-field">
          <label for="${s}apparently_unimportant_behaviours">
            Apparently Unimportant Behaviours
            <span class="diary-notes-subtitle">(non-obvious sabotage of goals)</span>
          </label>
          ${ie(`apparently_unimportant_behaviours`,2)}
        </div>
        <div class="diary-notes-field">
          <label for="${s}keeping_doors_open">Keeping Doors to Use Open</label>
          ${ie(`keeping_doors_open`,2)}
        </div>
      </div>

      <div class="diary-events-section">
        <h4>Events to note during the week</h4>
        <div class="diary-events-grid">
          ${h.map(e=>`
            <div class="diary-event-day">
              <label for="${s}event_${e}">${g[e]}</label>
              ${ie(`event_`+e,2)}
            </div>
          `).join(``)}
        </div>
      </div>

      ${o.length>0?`<div class="before-after-section">
        <h4>Before / After Therapy Session</h4>
        <table class="before-after-table">
          <thead>
            <tr>
              <th></th>
              <th>Before (0–5)</th>
              <th>After (0–5)</th>
            </tr>
          </thead>
          <tbody>
            ${c}
          </tbody>
        </table>
      </div>`:``}

      <div class="skills-legend">
        <h4>Skills Used Scale</h4>
        <dl class="skills-scale">
          ${a}
        </dl>
      </div>
    </section>
  `}function an(){return`
    <section class="diary-sheet" aria-label="Skills Diary Card">
      <h3 class="diary-sheet-title">Skills Diary Card</h3>
      <p class="diary-instructions">Instructions: Check the days you worked on each skill</p>
      <div class="diary-table-wrapper">
        <table class="skills-table">
          <thead>
            <tr>
              <th class="skill-name-header">Skill</th>
              ${h.map(e=>`<th class="skill-day-header">${_[e]}</th>`).join(``)}
            </tr>
          </thead>
          <tbody>
            ${Qt.map((e,t)=>{let n=t+1,r=h.map(e=>`<td class="skill-day-cell"><input type="checkbox" id="${s}skill_${n}_${e}" name="skill_${n}_${e}" class="form-checkbox"></td>`).join(``);return`<tr><td class="skill-label">${e.replace(/\n/g,`<br>`)}</td>${r}</tr>`}).join(``)}
          </tbody>
          <tfoot>
            ${[{key:`urge_use_therapy`,label:`Urge to Use (0–5)`},{key:`urge_quit_therapy`,label:`Urge to Quit Therapy (0–5)`}].map(e=>`
      <tr>
        <td class="skill-label" colspan="${1+h.length}">
          <div class="therapy-urge-row">
            <span>${e.label}</span>
            <label>Before Therapy Session:
              <input type="number" id="${s}${e.key}_before" name="${e.key}_before" min="0" max="5" class="diary-cell-input">
            </label>
            <label>After Therapy Session:
              <input type="number" id="${s}${e.key}_after" name="${e.key}_after" min="0" max="5" class="diary-cell-input">
            </label>
          </div>
        </td>
      </tr>
    `).join(``)}
          </tfoot>
        </table>
      </div>
    </section>
  `}var on=`
    <div class="mood-records-enable" style="display:none">
      <label class="mood-records-toggle">
        <input type="checkbox" id="dc-mood-records-cb">
        <span class="mood-records-toggle-label">include mood records</span>
      </label>
    </div>
`,sn=`
    <div class="mood-records-embed" style="display:none">
      <div id="dc-mood-records-list" class="mood-list"></div>
    </div>
`,cn=`
    <div class="sleep-plot-enable" style="display:none">
      <label class="sleep-plot-toggle">
        <input type="checkbox" id="dc-sleep-plot-cb">
        <span class="sleep-plot-toggle-label">show sleep</span>
      </label>
    </div>
`,ln=`
    <div class="sleep-plot-embed" style="display:none">
      <div id="dc-sleep-plot-mount"></div>
    </div>
`;function un(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">DBT Diary Card</h2>
      <h3 class="worksheet-name">Weekly Tracking</h3>
    </div>

    <div class="form-row form-row-header diary-header-row">
      <label>Initials: <input type="text" id="${s}initials" name="initials" class="form-input form-input-short"></label>
      <label>Date Started: <input type="date" id="${s}date_started" name="date_started" class="form-input"></label>
    </div>

    <div class="form-row diary-header-row">
      <fieldset class="inline-radio">
        <legend>How often did you fill out this side?</legend>
        ${ae(`fill_frequency`,[{value:`daily`,label:`Daily`},{value:`2-3_times`,label:`2–3 Times`},{value:`once`,label:`Once`}],`inline-radio-group`)}
      </fieldset>
      <fieldset class="inline-radio">
        <legend>Filled out in session?</legend>
        ${ae(`filled_in_session`,[{value:`yes`,label:`Yes`},{value:`no`,label:`No`}],`inline-radio-group`)}
      </fieldset>
    </div>

    ${rn()}
    ${an()}
    ${ln}
    ${sn}
    ${cn}
    ${on}
  `}async function dn(e,t){let n=e.querySelector(`#input_date_started`)?.value||t?.metadata.date,r=null,i=null;n&&(r=new Date(n+`T00:00:00`),i=new Date(r),i.setDate(i.getDate()+7));let a=e.querySelector(`.mood-records-enable`),o=e.querySelector(`.mood-records-embed`);if(a&&o){a.style.display=``,o.style.display=``;let e=a.querySelector(`#dc-mood-records-cb`),t=o.querySelector(`#dc-mood-records-list`);e.disabled=!1;let n=await R(),s;s=r&&i?n.filter(e=>{if(e.tombstoned_at)return!1;let t=new Date(e.recorded_at);return t>=r&&t<i}):n.filter(e=>!e.tombstoned_at),s.sort((e,t)=>_e(t.recorded_at,e.recorded_at)),e.addEventListener(`change`,()=>{e.checked?Pt(t,s,{emptyMessage:`No mood records for this week.`}):t.innerHTML=``})}let s=e.querySelector(`.sleep-plot-enable`),c=e.querySelector(`.sleep-plot-embed`);if(s&&c){let e=await dt();if(e&&e.length>0){s.style.display=``,c.style.display=``;let t=s.querySelector(`#dc-sleep-plot-cb`),n=c.querySelector(`#dc-sleep-plot-mount`);t.disabled=!1;let a=qt(e),o=null;t.addEventListener(`change`,()=>{t.checked?(o=Yt({showMoodRecords:!1,showDateRangeControl:!1,showRollingAvgControl:!0,defaultRangeDays:7,sleep:a,...r&&i?{startDate:r.getTime(),endDate:i.getTime()}:{}}),n.innerHTML=``,n.appendChild(o.element)):(o&&=(o.destroy(),null),n.innerHTML=``)})}}}function fn(){let e=(e,t=``)=>E(e,t,!0);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Mindfulness Worksheet 4A</h2>
      <p class="worksheet-ref">(Mindfulness Handouts 4–4c)</p>
      <h3 class="worksheet-name">Observing, Describing, Participating Checklist</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${E(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${E(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Check off mindfulness skills that you use when you use them. You can check each skill up to four
      times. If you practice a skill more than four times, extend your checks toward the edge of the page.
    </p>

    <fieldset class="worksheet-step">
      <legend>Practice Observing</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`obs_1`)} 1. What you see: ${e(`obs_1_watch`)}Watch without following what you see.</p>
      <p class="checklist-item">${e(`obs_2`)} 2. Sounds: ${e(`obs_2_sounds`)}Sounds around you, ${e(`obs_2_pitch`)}pitch and sound of someone's voice, ${e(`obs_2_music`)}music.</p>
      <p class="checklist-item">${e(`obs_3`)} 3. Smells around you: ${e(`obs_3_food`)}Aroma of food, ${e(`obs_3_soap`)}soap, ${e(`obs_3_air`)}air as you walk.</p>
      <p class="checklist-item">${e(`obs_4`)} 4. The taste of what you eat and the act of eating.</p>
      <p class="checklist-item">${e(`obs_5`)} 5. Urges to do something: ${e(`obs_5_urge_surf`)}Urge-surf, ${e(`obs_5_notice_avoid`)}notice urge to avoid, ${e(`obs_5_notice_body`)}notice where in body urge is.</p>
      <p class="checklist-item">${e(`obs_6`)} 6. Body sensations: ${e(`obs_6_body_scan`)}Body scan, ${e(`obs_6_walking`)}sensation of walking, ${e(`obs_6_touching`)}body touching something.</p>
      <p class="checklist-item">${e(`obs_7`)} 7. Thoughts coming in and out of your mind: ${e(`obs_7_river`)}Imagine your mind as a river, ${e(`obs_7_conveyor`)}as a conveyor belt.</p>
      <p class="checklist-item">${e(`obs_8`)} 8. Your breath: ${e(`obs_8_stomach`)}Movement of stomach, ${e(`obs_8_nose`)}sensations of air in and out nose.</p>
      <p class="checklist-item">${e(`obs_9`)} 9. By expanding awareness: ${e(`obs_9_body`)}To your entire body, ${e(`obs_9_space`)}to space around you, ${e(`obs_9_tree`)}to hugging a tree.</p>
      <p class="checklist-item">${e(`obs_10`)} 10. By opening the mind: ${e(`obs_10_each_sensation`)}To each sensation arising, not attaching, letting go of each.</p>
      <p class="checklist-item">${e(`obs_11`)} 11. Other (describe): ${e(`obs_11_describe`)}</p>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice Describing</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`desc_12`)} 12. What you see outside of your body.</p>
      <p class="checklist-item">${e(`desc_13`)} 13. Thoughts, feelings, and body sensations inside yourself.</p>
      <p class="checklist-item">${e(`desc_14`)} 14. Your breathing.</p>
      <p class="checklist-item">${e(`desc_15`)} 15. Other (describe): ${e(`desc_15_describe`)}</p>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice Participating</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`part_16`)} 16. Dance to music.</p>
      <p class="checklist-item">${e(`part_17`)} 17. Sing along with music you are listening to.</p>
      <p class="checklist-item">${e(`part_18`)} 18. Sing in the shower.</p>
      <p class="checklist-item">${e(`part_19`)} 19. Sing and dance while watching TV.</p>
      <p class="checklist-item">${e(`part_20`)} 20. Jump out of bed and dance or sing before getting dressed.</p>
      <p class="checklist-item">${e(`part_21`)} 21. Go to a church that sings and join in the singing.</p>
      <p class="checklist-item">${e(`part_22`)} 22. Play karaoke with friends or at a karaoke club or bar.</p>
      <p class="checklist-item">${e(`part_23`)} 23. Throw yourself into what another person is saying.</p>
      <p class="checklist-item">${e(`part_24`)} 24. Go running, riding, skating, walking; become one with the activity.</p>
      <p class="checklist-item">${e(`part_25`)} 25. Play a sport and throw yourself into playing.</p>
      <p class="checklist-item">${e(`part_26`)} 26. Become the count of your breath, becoming only \u201cone\u201d when you count 1, becoming only \u201ctwo\u201d when you count 2, and so on.</p>
      <p class="checklist-item">${e(`part_27`)} 27. Become a word as you slowly say the word over and over and over.</p>
      <p class="checklist-item">${e(`part_28`)} 28. Throw caution to the wind, and throw yourself into a social or work activity.</p>
      <p class="checklist-item">${e(`part_29`)} 29. Other (describe): ${e(`part_29_describe`)}</p>
    </fieldset>

    <div class="form-section">
      <p><strong>List any and all wise things you did this week:</strong></p>
      ${T(`wise_things`,3)}
    </div>
  `}function pn(){let e=(e,t=``)=>E(e,t,!0);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Mindfulness Worksheet 5A</h2>
      <p class="worksheet-ref">(Mindfulness Handouts 5\u20135c)</p>
      <h3 class="worksheet-name">Nonjudgmentalness, One-Mindfulness, Effectiveness Checklist</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${E(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${E(`week_starting`)}</label>
    </div>

    <fieldset class="worksheet-step">
      <legend>Practice Nonjudgmentalness</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`nonj_1`)} 1. Say in your mind, \u201cA judgmental thought arose in my mind.\u201d</p>
      <p class="checklist-item">${e(`nonj_2`)} 2. Count judgmental thoughts.</p>
      <p class="checklist-item">${e(`nonj_3`)} 3. Replace judgmental thoughts and statements with nonjudgmental thoughts and statements.</p>
      <p class="checklist-item">${e(`nonj_4`)} 4. Observe your judgmental facial expressions, postures, voice tones.</p>
      <p class="checklist-item">${e(`nonj_5`)} 5. Change judgmental expressions, postures, voice tones.</p>
      <p class="checklist-item">${e(`nonj_6`)} 6. Stay very concrete and describe your day nonjudgmentally.</p>
      <p class="checklist-item">${e(`nonj_7`)} 7. Write out a nonjudgmental description of an event that prompted an emotion.</p>
      <p class="checklist-item">${e(`nonj_8`)} 8. Write out a nonjudgmental blow-by-blow account of a particularly important episode in your day.</p>
      <p class="checklist-item">${e(`nonj_9`)} 9. Imagine a person you are angry with. Imagine understanding that person.</p>
      <p class="checklist-item">${e(`nonj_10`)} 10. When you feel judgmental, practice half-smiling and/or willing hands.</p>

      <div class="form-section" style="margin-top: var(--space-md);">
        <p><strong>Describe the situation and how you practiced nonjudgmentalness:</strong></p>
        ${T(`nonj_describe`,3)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice One-Mindfulness</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`onem_11`)} 11. Awareness while making tea or coffee.</p>
      <p class="checklist-item">${e(`onem_12`)} 12. Awareness while washing the dishes.</p>
      <p class="checklist-item">${e(`onem_13`)} 13. Awareness while hand-washing clothes.</p>
      <p class="checklist-item">${e(`onem_14`)} 14. Awareness while cleaning house.</p>
      <p class="checklist-item">${e(`onem_15`)} 15. Awareness while taking a slow-motion bath.</p>
      <p class="checklist-item">${e(`onem_16`)} 16. Awareness with meditation.</p>

      <div class="form-section" style="margin-top: var(--space-md);">
        <p><strong>Describe the situation and how you practiced one-mindfulness:</strong></p>
        ${T(`onem_describe`,3)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice Effectiveness</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`eff_17`)} 17. Give up being right.</p>
      <p class="checklist-item">${e(`eff_18`)} 18. Drop willfulness.</p>
      <p class="checklist-item">${e(`eff_19`)} 19. Doing what is effective.</p>

      <div class="form-section" style="margin-top: var(--space-md);">
        <p><strong>Describe the situation and how you practiced effectiveness:</strong></p>
        ${T(`eff_describe`,3)}
      </div>
    </fieldset>

    <div class="form-section">
      <p><strong>List any and all wise things you did this week:</strong></p>
      ${T(`wise_things`,3)}
    </div>
  `}function mn(e){let t=`event${e}_`;return`
    <fieldset class="worksheet-step">
      <legend>Crisis Event ${e}</legend>

      <div class="form-row">
        <label><strong>CRISIS EVENT ${e}:</strong></label>
        <label>Rate level of distress (0–100) Before: ${D(`${t}distress_before`,0,100)}</label>
        <label>After: ${D(`${t}distress_after`,0,100)}</label>
      </div>

      <div class="form-section">
        <p><strong>Prompting event for my distress (who, what, when, where):</strong> What triggered the state of crisis?</p>
        ${T(`${t}prompting_event`,3)}
      </div>

      <div class="form-section">
        <label><strong>Behavior you are trying to stop:</strong> ${E(`${t}behavior_to_stop`)}</label>
      </div>

      <div class="form-section">
        <p><strong>At left, check the steps you used, and describe what you did here:</strong></p>
        <div class="form-row">
          <div class="form-section">
            <div><label>${O(`${t}stop`)} Stop</label></div>
            <div><label>${O(`${t}step_back`)} Take a step back</label></div>
            <div><label>${O(`${t}observe`)} Observe</label></div>
            <div><label>${O(`${t}proceed_mindfully`)} Proceed mindfully</label></div>
          </div>
          ${T(`${t}steps_used_description`,4)}
        </div>
      </div>

      <div class="form-section">
        <p><strong>Describe the outcome of using skills:</strong></p>
        ${T(`${t}outcome`,3)}
      </div>

      <div class="form-section">
        <p>Circle a number to indicate how effective the skill was in helping you tolerate the distress
           and cope with the situation (keeping you from doing something to make the situation worse).
           Use the following scale:</p>
        <p>
          1 = I still couldn't stand the situation, even for one more minute. &nbsp;
          3 = I was able to cope somewhat, at least for a little while. It helped somewhat. &nbsp;
          5 = I could use skills, tolerated distress, and resisted problem urges.
        </p>
        <div class="form-row">
          <label>Effectiveness (1–5): ${D(`${t}effectiveness`,1,5)}</label>
        </div>
      </div>
    </fieldset>
  `}function hn(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Worksheet 2</h2>
      <p class="worksheet-ref">(Distress Tolerance Handout 4)</p>
      <h3 class="worksheet-name">Practicing the STOP Skill</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${E(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${E(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Describe two crisis situations that happened to you. Then describe your use of the STOP skill.
    </p>

    ${mn(1)}
    ${mn(2)}
  `}var gn=5;function _n(){let e=(e,t)=>Array.from({length:gn},(n,r)=>`${E(`${e}_${t}_${r+1}`)}`).join(``);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Worksheet 3</h2>
      <p class="worksheet-ref">(Distress Tolerance Handout 5)</p>
      <h3 class="worksheet-name">Pros and Cons of Acting on Crisis Urges</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${E(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${E(`week_starting`)}</label>
    </div>

    <ol class="worksheet-instructions">
      <li>Describe the <em>problem behavior</em> you are trying to stop:</li>
      <li>List pros and cons for acting on crisis urges (including urges to act and urges to quit),
          and create a separate list for resisting crisis behavior by tolerating distress and using skills.</li>
      <li>Read the pros and cons when an urge toward the problem behavior occurs.</li>
    </ol>

    <div class="form-row">
      <label>Problem behavior: ${E(`problem_behavior`)}</label>
    </div>

    <div class="pros-cons-grid">
      <div class="pros-cons-column">
        <h4>Acting on Crisis Urges</h4>
        <div class="pros-section">
          <strong>PROS</strong>
          ${e(`acting`,`pros`)}
        </div>
        <div class="cons-section">
          <strong>CONS</strong>
          ${e(`acting`,`cons`)}
        </div>
      </div>
      <div class="pros-cons-column">
        <h4>Resisting Crisis Urges</h4>
        <div class="pros-section">
          <strong>PROS</strong>
          ${e(`resisting`,`pros`)}
        </div>
        <div class="cons-section">
          <strong>CONS</strong>
          ${e(`resisting`,`cons`)}
        </div>
      </div>
    </div>

    <p class="worksheet-instructions">
      Identify which pros and cons are short-term (just for today) or long-term (beyond today).
      Then ask your Wise Mind: Would you rather have a good day or a good life?
      Make a mindful choice about your behavior.
    </p>

    <p class="worksheet-aside">
      <em>If this worksheet helps you choose skillful behavior over crisis behavior, be sure to keep it
      where you can find it and review it again when you are in crisis.</em>
    </p>
  `}var vn=[{id:`temperature`,title:`CHANGING MY FACIAL TEMPERATURE`,subtitle:`Used cold water to change emotions`},{id:`exercise`,title:`INTENSE EXERCISE`,subtitle:``},{id:`breathing`,title:`PACED BREATHING`,subtitle:``},{id:`relaxation`,title:`PAIRED MUSCLE RELAXATION`,subtitle:``}];function yn(){let e=vn.map(({id:e,title:t,subtitle:n})=>`
    <fieldset class="worksheet-step">
      <legend>${n?`${t} — ${n}`:t}</legend>

      <div class="form-section">
        <label><strong>Situation:</strong> ${E(`${e}_situation`)}</label>
      </div>

      <div class="form-row">
        <label><strong>Arousal (0–100)</strong> Before: ${D(`${e}_arousal_before`,0,100)}</label>
        <label>After: ${D(`${e}_arousal_after`,0,100)}</label>
      </div>

      <div class="form-row">
        <label><strong>Distress tolerance</strong> (0 = I can't stand it; 100 = I can survive) Before: ${D(`${e}_tolerance_before`,0,100)}</label>
        <label>After: ${D(`${e}_tolerance_after`,0,100)}</label>
      </div>

      <div class="form-section">
        <p><strong>What I did</strong> (describe):</p>
        ${T(`${e}_what_i_did`,3)}
      </div>
    </fieldset>`).join(`
`);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Worksheet 4</h2>
      <h3 class="worksheet-name">Changing Body Chemistry with TIP Skills</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${E(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${E(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Describe the situation you were in when you chose to practice each skill.
      Rate both your emotional arousal and distress tolerance before and after using the TIP skill.
      Describe what you actually did.
    </p>
${e}
  `}var bn=[{id:`ch0`,title:`Welcome to DBT Skills Group`,bookPdfPath:`chapters/ch0.pdf`,forms:[{id:`diary_card`,title:`Diary Card`,subtitle:`Weekly tracking`,pageRef:``,buildFormHtml:un,afterViewRender:dn}]},{id:`ch3`,title:`Session 3: Emotion Regulation`,bookPdfPath:`chapters/ch3.pdf`,forms:[{id:`er_ws9`,title:`Steps for Reducing Vulnerability to Emotion Mind`,subtitle:`Emotion Regulation Worksheet 9`,pageRef:`p. 64`,buildFormHtml:fe}]},{id:`ch4`,title:`Session 4: Emotion Regulation`,bookPdfPath:`chapters/ch4.pdf`,forms:[{id:`er_ws5`,title:`Check the Facts`,subtitle:`Emotion Regulation Worksheet 5`,pageRef:`pp. 72–73`,buildFormHtml:se},{id:`er_ws7`,title:`Opposite Action to Change Emotions`,subtitle:`Emotion Regulation Worksheet 7`,pageRef:`p. 74`,buildFormHtml:ce},{id:`er_ws8`,title:`Problem Solving to Change Emotions`,subtitle:`Emotion Regulation Worksheet 8`,pageRef:`pp. 75–76`,buildFormHtml:de}]},{id:`ch5`,title:`Session 5: Mindfulness`,bookPdfPath:`chapters/ch5.pdf`,forms:[{id:`mf_ws4a`,title:`Observing, Describing, Participating Checklist`,subtitle:`Mindfulness Worksheet 4A`,pageRef:`p. 92`,buildFormHtml:fn},{id:`mf_ws5a`,title:`Nonjudgmentalness, One-Mindfulness, Effectiveness Checklist`,subtitle:`Mindfulness Worksheet 5A`,pageRef:`p. 93`,buildFormHtml:pn}]},{id:`ch6`,title:`Session 6: Distress Tolerance`,bookPdfPath:`chapters/ch6.pdf`,forms:[{id:`dt_ws2`,title:`Practicing the STOP Skill`,subtitle:`Distress Tolerance Worksheet 2`,pageRef:`p. 107`,buildFormHtml:hn},{id:`dt_ws3`,title:`Pros and Cons of Acting on Crisis Urges`,subtitle:`Distress Tolerance Worksheet 3`,pageRef:`p. 108`,buildFormHtml:_n},{id:`dt_ws4`,title:`Changing Body Chemistry with TIP Skills`,subtitle:`Distress Tolerance Worksheet 4`,pageRef:`p. 109`,buildFormHtml:yn}]}];function xn(){return bn}function Sn(e){for(let t of bn){let n=t.forms.find(t=>t.id===e);if(n)return n}}function Cn(e){return bn.find(t=>t.forms.some(t=>t.id===e))}var wn=15,Tn=5,En=600,Dn=[8,3];function On(e){try{return new Date(e+`T00:00:00`).toLocaleDateString(void 0,{weekday:`short`,year:`numeric`,month:`short`,day:`numeric`})}catch{return e}}function kn(e){let t=Sn(e.metadata.form_id)?.title??e.metadata.form_id,n=e.metadata.completed?`status-complete`:`status-draft`,r=e.metadata.completed?`Complete`:`Draft`,i=o({view:`edit`,formId:e.metadata.form_id,date:e.metadata.date}),a=o({view:`readonly`,formId:e.metadata.form_id,date:e.metadata.date});return`
    <div class="fill-item" data-form-id="${e.metadata.form_id}" data-date="${e.metadata.date}">
      <div class="fill-info">
        <span class="fill-title">${t}</span>
        <span class="fill-date">${On(e.metadata.date)}</span>
        <span class="fill-status ${n}">${r}</span>
      </div>
      <div class="fill-actions">
        <a href="${i}" class="btn btn-small">Edit</a>
        <a href="${a}" class="btn btn-small btn-secondary">View</a>
        <button class="btn btn-small btn-danger delete-fill-btn" data-form-id="${e.metadata.form_id}" data-date="${e.metadata.date}">Delete</button>
      </div>
    </div>
  `}function An(e,t,n,r){if(e.length===0){t.innerHTML=`<p class="empty-state">No saved fills yet. Choose a form above to get started.</p>`;return}let i=n.hideCompleted?e.filter(e=>!e.metadata.completed):e;if(i.length===0){t.innerHTML=`<p class="empty-state">All fills are completed. Uncheck "Hide completed" to see them.</p>`;return}let a=[...i].sort((e,t)=>t.metadata[n.sortBy].localeCompare(e.metadata[n.sortBy])),o;if(n.groupByChapter){let e=xn(),t=new Map,n=[];for(let e of a){let r=Cn(e.metadata.form_id);r?(t.has(r.id)||t.set(r.id,{title:r.title,fills:[]}),t.get(r.id).fills.push(e)):n.push(e)}let r=[];for(let n of e){let e=t.get(n.id);e&&e.fills.length>0&&r.push(`
          <div class="fills-chapter-group">
            <h4 class="fills-chapter-title">${e.title}</h4>
            ${e.fills.map(kn).join(``)}
          </div>
        `)}n.length>0&&r.push(`
        <div class="fills-chapter-group">
          <h4 class="fills-chapter-title">Other</h4>
          ${n.map(kn).join(``)}
        </div>
      `),o=r.join(``)}else o=a.map(kn).join(``);t.innerHTML=o,t.querySelectorAll(`.delete-fill-btn`).forEach(e=>{e.addEventListener(`click`,async e=>{let t=e.currentTarget,n=t.dataset.formId,i=t.dataset.date;await r(n,i)})})}async function jn(e){let t=xn(),n=await ze(),r=I(),a=we(),s=await ot(),{fillsSortBy:c,fillsGroupByChapter:l,fillsHideCompleted:u}=s,d=!1;r===`fsa`&&(d=await P()!==null);let f=await dt(),p=f!==null&&f.length>0,m=t.map(e=>{let t=e.forms.map(e=>`
            <a href="${o({view:`new`,formId:e.id})}" class="form-card">
              <h3 class="form-card-title">${e.title}</h3>
              <p class="form-card-subtitle">${e.subtitle} <span class="form-card-ref">${e.pageRef}</span></p>
            </a>
          `).join(``),n=`/freedbt/${e.bookPdfPath}`;return`
        <div class="session-group">
          <h3 class="session-group-title">
            ${e.title}
            <a href="${n}" target="_blank" rel="noopener" class="book-link" title="Open chapter PDF"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="2" d="M2 3h6a4 4 0 0 1 4 4v12.5a1.5 1.5 0 0 0-1.5-1.5H2z"/><path stroke-width="2" d="M22 3h-6a4 4 0 0 0-4 4v12.5a1.5 1.5 0 0 1 1.5-1.5h8.5z"/><path stroke-width="1" d="M4 7.5h6M4 10h6M4 12.5h6M4 15h6M14 7.5h6M14 10h6M14 12.5h6M14 15h6"/></svg></a>
          </h3>
          <div class="form-cards">${t}</div>
        </div>
      `}).join(``),h=a&&!d?`<div class="fsa-banner">
           <p>For best results, choose a folder to save your data as files on disk.</p>
           <button id="fsa-pick-btn" class="btn">Choose Folder</button>
         </div>`:``,g=`<span class="backend-indicator" title="Storage backend">
    ${r===`fsa`&&d?`📁 File System`:`💾 Browser Storage`}
  </span>`,_=[{value:`updated_at`,label:`Modified`},{value:`created_at`,label:`Created`}].map(e=>`<option value="${e.value}"${e.value===c?` selected`:``}>${e.label}</option>`).join(``);e.innerHTML=`
    <div class="home-view">
      <header class="app-header">
        <h1 class="app-title">DBT</h1>
        <div class="header-actions">
          ${g}
          <a href="${o({view:`settings`})}" class="btn btn-secondary">Settings</a>
        </div>
      </header>

      ${h}

      <section class="tracking-section">
        <h2>Tracking</h2>
        <div class="tracking-actions">
          <button id="track-mood-btn" class="btn btn-secondary">Mood Record</button>
          <button id="toggle-mood-list-btn" class="btn btn-secondary">List</button>
          ${p?`<button id="toggle-sleep-mood-btn" class="btn btn-secondary">Plot Sleep &amp; Mood</button>`:``}
        </div>
        <div id="mood-record-list" class="mood-list" style="display:none"></div>
        ${p?`<div id="sleep-mood-plot-container" style="display:none"></div>`:``}
      </section>

      <dialog id="mood-record-dialog" class="mood-record-dialog">
        <div id="mood-record-mount"></div>
      </dialog>

      <section class="fills-section">
        <div class="fills-header">
          <h2>Saved Fills</h2>
          <div class="fills-controls">
            <select id="fills-sort" class="fills-sort">${_}</select>
            <label class="fills-group-toggle">
              <input type="checkbox" id="fills-hide-completed"${u?` checked`:``}> Hide completed
            </label>
            <label class="fills-group-toggle">
              <input type="checkbox" id="fills-group-by-chapter"${l?` checked`:``}> By chapter
            </label>
          </div>
        </div>
        <div class="fills-list"></div>
      </section>


      <section class="forms-section">
        <h2>New Fill</h2>
        ${m}
      </section>
    </div>
  `;let v=e.querySelector(`.fills-list`),y=async(t,n)=>{confirm(`Delete this ${Sn(t)?.title??t} fill from ${n}?`)&&(await Le(t,n),await jn(e))},b=()=>An(n,v,{groupByChapter:l,sortBy:c,hideCompleted:u},y);b();let x=e.querySelector(`#fills-sort`);x.addEventListener(`change`,async()=>{c=x.value,await st({...s,fillsSortBy:c}),b()});let ee=e.querySelector(`#fills-hide-completed`);ee.addEventListener(`change`,async()=>{u=ee.checked,await st({...s,fillsHideCompleted:u}),b()});let S=e.querySelector(`#fills-group-by-chapter`);S.addEventListener(`change`,async()=>{l=S.checked,await st({...s,fillsGroupByChapter:l}),b()});let te=e.querySelector(`#fsa-pick-btn`);te&&te.addEventListener(`click`,async()=>{try{await ke(),await jn(e)}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;throw e}});let C=e.querySelector(`#mood-record-dialog`),w=e.querySelector(`#mood-record-mount`),ne=e.querySelector(`#track-mood-btn`),re=null,T=!1;ne.addEventListener(`click`,()=>{w.innerHTML=``;let e=Nt({mood_opt:{btwPoints:!0,modal:!0},time_opt:{initDatetime:new Date,initBackMinutes:wn,minuteResolution:Tn,hour24:!1,hourGridDims:Dn,vertHours:!0,stackThresholdPx:En},onAdd:async e=>{let t={note:e.note,mood:e.mood,dtrange:{from:k(e.dtrange.from),to:k(e.dtrange.to)},recorded_at:k()};try{await et(t),C.close(),T&&await D()}catch(e){alert(`Failed to save mood record: ${e instanceof Error?e.message:e}`)}},onCancel:()=>{C.close()}});w.appendChild(e.element),re=e,C.showModal()}),C.addEventListener(`close`,()=>{re&&=(re.destroy(),null),w.innerHTML=``});let ie=e.querySelector(`#toggle-mood-list-btn`),E=e.querySelector(`#mood-record-list`);if(ie.addEventListener(`click`,async()=>{T=!T,ie.textContent=T?`Hide List`:`List`,T?await D():E.style.display=`none`}),p){let t=qt(f),n=e.querySelector(`#toggle-sleep-mood-btn`),r=e.querySelector(`#sleep-mood-plot-container`),i=null,a=!1;n.addEventListener(`click`,async()=>{a=!a,n.textContent=a?`Hide Plot`:`Plot Sleep & Mood`,a?(i=Yt({showMoodRecords:!0,sleep:t,moods:(await R()).filter(e=>!e.tombstoned_at)}),r.innerHTML=``,r.appendChild(i.element),r.style.display=``):(i&&=(i.destroy(),null),r.style.display=`none`)})}async function D(){let e=[...(await R()).filter(e=>!e.tombstoned_at)].sort((e,t)=>_e(t.recorded_at,e.recorded_at));Pt(E,e);let t=E.querySelectorAll(`.mood-rec-preview`);e.forEach((e,n)=>{let r=t[n];if(!r)return;let i=document.createElement(`button`);i.className=`mood-rec-btn`,i.textContent=`edit`,i.addEventListener(`click`,()=>O(e));let a=document.createElement(`button`);a.className=`mood-rec-btn mood-rec-btn-del`,a.textContent=`delete`,a.addEventListener(`click`,async()=>{if(!confirm(`Delete this mood record?`))return;let t=await R(),n=t.find(t=>t.recorded_at===e.recorded_at);n&&(n.tombstoned_at=k()),await $e(t),await D()}),r.appendChild(i),r.appendChild(a)}),E.style.display=``}function O(e){w.innerHTML=``;let t=new Date(e.dtrange.to),n=new Date(e.dtrange.from),r=Math.max(1,Math.round((t.getTime()-n.getTime())/6e4)),i=Nt({mood_opt:{btwPoints:!0,modal:!0,initialMood:e.mood??void 0},time_opt:{initDatetime:t,initBackMinutes:r,minuteResolution:Tn,hour24:!1,hourGridDims:Dn,vertHours:!0,stackThresholdPx:En},initialNote:e.note||void 0,onAdd:async t=>{let n={note:t.note,mood:t.mood,dtrange:{from:k(t.dtrange.from),to:k(t.dtrange.to)},recorded_at:e.recorded_at,edited_at:k()};try{let t=await R(),r=t.findIndex(t=>t.recorded_at===e.recorded_at);r>=0?t[r]=n:t.push(n),await $e(t),C.close(),T&&await D()}catch(e){alert(`Failed to save mood record: ${e instanceof Error?e.message:e}`)}},onCancel:()=>C.close()});w.appendChild(i.element),re=i,C.showModal()}e.querySelectorAll(`.form-card`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault();let t=e.currentTarget.getAttribute(`href`);t&&i(t)})})}function Mn(){return k().split(`T`)[0]}function Nn(){return k()}function Pn(e){let t={},n=e.querySelectorAll(`[id^="${s}"]`);for(let e of n){let n=e.id.slice(s.length);e instanceof HTMLInputElement?e.type===`checkbox`?t[n]=e.checked?`true`:`false`:e.type===`radio`?e.checked&&(t[e.name]=e.value):t[n]=e.value:t[n]=e.value}return t}function Fn(e,t){for(let[n,r]of Object.entries(t)){let t=e.querySelectorAll(`input[type="radio"][name="${n}"]`);if(t.length>0){for(let e of t)e.checked=e.value===r;continue}let i=e.querySelector(`#${s}${n}`);i&&(i instanceof HTMLInputElement&&i.type===`checkbox`?i.checked=r===`true`:i.value=r)}}function In(e){let t=e.querySelectorAll(`input, textarea, select`);for(let e of t)e.disabled=!0}var Ln=null;async function Rn(e,t){Ln&&Ln.abort(),Ln=null;let n=Sn(t.formId);if(!n){e.innerHTML=`
      <div class="error-view">
        <h2>Form not found</h2>
        <p>Unknown form ID: <code>${t.formId}</code></p>
        <a href="${o({view:`home`})}" class="btn">Back to Home</a>
      </div>
    `;return}let r=t.date??Mn(),i=await Ie(t.formId,r),a=i?.metadata??{form_id:t.formId,date:r,completed:!1,created_at:Nn(),updated_at:Nn()};await qe();let s=t.readonly?`View`:i?`Edit`:`New`,c=a.completed?`Complete`:`Draft`;if(e.innerHTML=`
    <div class="editor-view">
      <header class="editor-header">
        <div class="editor-header-left">
          <a href="${o({view:`home`})}" class="btn btn-secondary btn-back">← Back</a>
          <div class="editor-title-area">
            <h2>${n.title}</h2>
            <span class="editor-meta">${s} · ${r} · <span class="fill-status status-${a.completed?`complete`:`draft`}">${c}</span></span>
          </div>
        </div>
        ${t.readonly?`<div class="editor-actions">
                 <a href="${o({view:`edit`,formId:t.formId,date:r})}" class="btn">Edit</a>
               </div>`:`<div class="editor-actions">
                 <button id="save-draft-btn" class="btn btn-secondary">Save Draft</button>
                 <button id="mark-complete-btn" class="btn">${a.completed?`Already Complete`:`Mark Complete`}</button>
               </div>`}
      </header>

      <div class="editor-form-body" id="form-body">
        ${n.buildFormHtml()}
      </div>

      ${t.readonly?``:`<footer class="editor-footer">
               <button id="save-draft-btn-bottom" class="btn btn-secondary">Save Draft</button>
               <button id="mark-complete-btn-bottom" class="btn">${a.completed?`Already Complete`:`Mark Complete`}</button>
             </footer>`}

      <div id="save-toast" class="save-toast hidden" role="status" aria-live="polite"></div>
    </div>
  `,i&&Fn(e,i.data),t.readonly){if(In(e),n.afterViewRender){let t=e.querySelector(`#form-body`);await n.afterViewRender(t,i)}return}let l=t=>{let n=e.querySelector(`#save-toast`);n.textContent=t,n.classList.remove(`hidden`),setTimeout(()=>n.classList.add(`hidden`),2e3)},u=async t=>{let n=Pn(e),r=i?{...i.data,...n}:n,o={metadata:{...a,completed:t||a.completed,updated_at:Nn()},data:r};try{await Pe(o),t&&!a.completed&&(a.completed=!0,e.querySelectorAll(`.fill-status`).forEach(e=>{e.className=`fill-status status-complete`,e.textContent=`Complete`}),e.querySelectorAll(`#mark-complete-btn, #mark-complete-btn-bottom`).forEach(e=>{e.textContent=`Already Complete`})),l(t?`Saved and marked complete!`:`Draft saved!`)}catch(e){l(`Save failed: ${e instanceof Error?e.message:`Unknown error`}`)}};e.querySelectorAll(`#save-draft-btn, #save-draft-btn-bottom`).forEach(e=>e.addEventListener(`click`,()=>u(!1))),e.querySelectorAll(`#mark-complete-btn, #mark-complete-btn-bottom`).forEach(e=>e.addEventListener(`click`,()=>u(!0))),Ln=new AbortController,document.addEventListener(`keydown`,t=>{t.key===`s`&&(t.ctrlKey||t.metaKey)&&e.querySelector(`.editor-view`)&&(t.preventDefault(),u(!1))},{signal:Ln.signal});let{autosaveEnabled:d}=await ot();if(d){let t=e.querySelector(`#form-body`),n=null;t.addEventListener(`input`,()=>{n&&clearTimeout(n),n=setTimeout(async()=>{let t=Pn(e),n=i?{...i.data,...t}:t,r={metadata:{...a,updated_at:Nn()},data:n};try{await Pe(r)}catch{}},3e3)})}}var q=null,zn=0,Bn=null,Vn=null;function Hn(){localStorage.setItem(l,JSON.stringify({accessToken:q,expiresAt:zn,email:Bn}))}function Un(){let e=localStorage.getItem(l);if(e)try{let t=JSON.parse(e);q=t.accessToken,zn=t.expiresAt,Bn=t.email}catch{localStorage.removeItem(l)}}function Wn(){localStorage.removeItem(l)}Un();function Gn(){return typeof google<`u`&&!!google.accounts?.oauth2}function Kn(){if(!Gn())throw Error(`Google Identity Services library not loaded`);Vn=google.accounts.oauth2.initTokenClient({client_id:v,scope:`${x} email`,callback:()=>{}})}function qn(){return new Promise((e,t)=>{if(!Vn){t(Error(`Token client not initialized. Call initTokenClient() first.`));return}Vn.callback=async n=>{if(n.error){t(Error(`OAuth error: ${n.error}`));return}q=n.access_token;let r=(parseInt(n.expires_in,10)||3600)*1e3;zn=Date.now()+r;try{let e=await fetch(`https://www.googleapis.com/oauth2/v3/userinfo`,{headers:{Authorization:`Bearer ${q}`}});e.ok&&(Bn=(await e.json()).email??null)}catch{}Hn(),e(q)},Vn.error_callback=e=>{t(Error(`OAuth error: ${e.message??`unknown`}`))},Vn.requestAccessToken()})}function Jn(){return q?Date.now()>=zn?(q=null,null):q:null}function J(){return Jn()!==null}function Yn(){return Bn}function Xn(){q&&Gn()&&google.accounts.oauth2.revoke(q,()=>{}),q=null,zn=0,Bn=null,Wn()}function Zn(){let e=Jn();if(!e)throw Error(`Not signed in to Google`);return e}async function Qn(){let e=Zn(),t=[],n;do{let r=new URLSearchParams({spaces:`appDataFolder`,fields:`nextPageToken,files(id,name,modifiedTime)`,pageSize:`100`});n&&r.set(`pageToken`,n);let i=await fetch(`${y}/files?${r}`,{headers:{Authorization:`Bearer ${e}`}});if(!i.ok)throw Error(`Drive list failed: ${i.status} ${await i.text()}`);let a=await i.json();for(let e of a.files??[])t.push({id:e.id,name:e.name,modifiedTime:e.modifiedTime});n=a.nextPageToken}while(n);return t}async function Y(e){let t=Zn(),n=await fetch(`${y}/files/${e}?alt=media`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw Error(`Drive read failed: ${n.status} ${await n.text()}`);return n.text()}async function X(e,t,n=`application/octet-stream`,r){let i=Zn(),a={name:e,parents:[`appDataFolder`]};r&&(a.modifiedTime=r);let o=`---freedbt_boundary`,s=`--${o}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(a)}\r\n--${o}\r\nContent-Type: ${n}\r\n\r\n${t}\r\n--${o}--`,c=await fetch(`${b}/files?uploadType=multipart&fields=id`,{method:`POST`,headers:{Authorization:`Bearer ${i}`,"Content-Type":`multipart/related; boundary=${o}`},body:s});if(!c.ok)throw Error(`Drive create failed: ${c.status} ${await c.text()}`);return(await c.json()).id}async function Z(e,t,n=`application/octet-stream`,r){let i=Zn(),a={};r&&(a.modifiedTime=r);let o=`---freedbt_boundary`,s=`--${o}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(a)}\r\n--${o}\r\nContent-Type: ${n}\r\n\r\n${t}\r\n--${o}--`,c=await fetch(`${b}/files/${e}?uploadType=multipart`,{method:`PATCH`,headers:{Authorization:`Bearer ${i}`,"Content-Type":`multipart/related; boundary=${o}`},body:s});if(!c.ok)throw Error(`Drive update failed: ${c.status} ${await c.text()}`)}async function $n(e){let t=Zn(),n=await fetch(`${y}/files/${e}`,{method:`DELETE`,headers:{Authorization:`Bearer ${t}`}});if(!n.ok&&n.status!==404)throw Error(`Drive delete failed: ${n.status} ${await n.text()}`)}function er(e,t){let n=JSON.parse(e),r=JSON.parse(t),i=new Map;for(let e of r)i.set(e.recorded_at,e);for(let e of n){let t=i.get(e.recorded_at);if(!t){i.set(e.recorded_at,e);continue}let n=new Date(e.edited_at??e.recorded_at).getTime(),r=new Date(t.edited_at??t.recorded_at).getTime(),a=n>=r?e:t,o=Math.max(n,r),s={...a};delete s.tombstoned_at;let c,l=0;for(let n of[e,t])if(n.tombstoned_at){let e=new Date(n.tombstoned_at).getTime();e>o&&e>l&&(c=n.tombstoned_at,l=e)}c&&(s.tombstoned_at=c),i.set(e.recorded_at,s)}let a=[...i.values()].sort((e,t)=>_e(e.recorded_at,t.recorded_at));return JSON.stringify(a,null,2)}function tr(e,t){let n=JSON.parse(e),r=JSON.parse(t),i=new Map;for(let e of r)i.set(e.startTime,e);for(let e of n){let t=i.get(e.startTime);if(!t){i.set(e.startTime,e);continue}e.stages&&!t.stages&&i.set(e.startTime,e)}let a=[...i.values()].sort((e,t)=>e.startTime-t.startTime);return JSON.stringify(a,null,2)}var nr=t({fullSync:()=>mr,isSyncing:()=>dr,onSyncStatusChange:()=>lr,scheduleMergeSync:()=>gr,scheduleSingleUpload:()=>hr,scheduleSyncedSettingsUpload:()=>_r,syncDeletion:()=>vr}),rr={[S]:{merge:er,readLocal:Ze,writeLocal:Qe},[ne]:{merge:tr,readLocal:lt,writeLocal:ut}},ir=!1,ar=null,or=null,sr=new Map,cr=[];function lr(e){cr.push(e)}function ur(){for(let e of cr)e()}function dr(){return ir}async function fr(e){let t=e.find(e=>e.name===ee);if(!t)return{manifest:{deleted:{}},fileId:null};try{let e=await Y(t.id);return{manifest:JSON.parse(e),fileId:t.id}}catch{return{manifest:{deleted:{}},fileId:t.id}}}async function pr(e,t){let n=JSON.stringify(e);t?await Z(t,n,`application/json`):await X(ee,n,`application/json`)}async function mr(){if(!J())throw Error(`Not signed in`);if(ir)throw Error(`Sync already in progress`);ir=!0,ur();try{let[e,t]=await Promise.all([Be(),Qn()]),{manifest:n,fileId:r}=await fr(t),i=!1,a=new Map(e.map(e=>[e.filename,e.content])),o=new Map;for(let e of t)e.name.endsWith(`.toml`)&&o.set(e.name,e);let s=new Set([...a.keys(),...o.keys()]),c=0,l=0,u=0,d=[];for(let e of s){let t=a.has(e),r=o.has(e),s=e in n.deleted;if(t&&!r){let t=a.get(e),r=F(t);if(s){let t=new Date(r.metadata.updated_at).getTime();if(new Date(n.deleted[e]).getTime()>t){let t=yr(e);t&&(await Le(t.formId,t.date),u++);continue}delete n.deleted[e],i=!0}await X(e,t,void 0,r.metadata.updated_at),c++}else if(!t&&r){let t=o.get(e);if(s){await $n(t.id),u++;continue}let n=await Y(t.id);d.push({filename:e,content:n}),l++}else if(t&&r){let t=a.get(e),n=o.get(e),r=F(t),i=new Date(r.metadata.updated_at).getTime(),s=new Date(n.modifiedTime).getTime();if(i>s)await Z(n.id,t,void 0,r.metadata.updated_at),c++;else if(s>i){let a=await Y(n.id),o=F(a);new Date(o.metadata.updated_at).getTime()>i?(d.push({filename:e,content:a}),l++):(await Z(n.id,t,void 0,r.metadata.updated_at),c++)}}}d.length>0&&await Ve(d);for(let[e,n]of Object.entries(rr)){let r=await n.readLocal(),i=t.find(t=>t.name===e);if(r&&!i)await X(e,r,`application/json`),c++;else if(!r&&i){let e=await Y(i.id);await n.writeLocal(e),l++}else if(r&&i){let e=await Y(i.id),t=n.merge(r,e);t!==e&&(await Z(i.id,t,`application/json`),c++),t!==r&&(await n.writeLocal(t),l++)}}let f=await Ye(),p=t.find(e=>e.name===m),h=f?br(f):void 0;if(f&&!p)await X(m,f,`application/json`,h),c++;else if(!f&&p)await Xe(await Y(p.id)),l++;else if(f&&p){let e=h?new Date(h).getTime():0,t=new Date(p.modifiedTime).getTime();if(e>t)await Z(p.id,f,void 0,h),c++;else if(t>e){let t=await Y(p.id),n=br(t);(n?new Date(n).getTime():0)>e?(await Xe(t),l++):(await Z(p.id,f,void 0,h),c++)}}let g=await it(),_=t.find(e=>e.name===C),v=g?br(g):void 0;if(g&&!_)await X(C,g,`application/json`,v),c++;else if(!g&&_)await at(await Y(_.id)),l++;else if(g&&_){let e=v?new Date(v).getTime():0,t=new Date(_.modifiedTime).getTime();if(e>t)await Z(_.id,g,void 0,v),c++;else if(t>e){let t=await Y(_.id),n=br(t);(n?new Date(n).getTime():0)>e?(await at(t),l++):(await Z(_.id,g,void 0,v),c++)}}i&&await pr(n,r);let y=A();return y.lastSyncedAt=k(),Ce(y),{uploaded:c,downloaded:l,deleted:u}}finally{ir=!1,ur()}}function hr(e,t){J()&&A().syncEnabled&&(ar&&clearTimeout(ar),ar=setTimeout(async()=>{try{let n=F(t).metadata.updated_at,r=(await Qn()).find(t=>t.name===e);r?await Z(r.id,t,void 0,n):await X(e,t,void 0,n)}catch(e){console.error(`Background sync upload failed:`,e)}},2e3))}function gr(e){if(!J()||!A().syncEnabled)return;let t=rr[e];if(!t)return;let n=sr.get(e);n&&clearTimeout(n),sr.set(e,setTimeout(async()=>{sr.delete(e);try{let n=await t.readLocal();if(!n)return;let r=(await Qn()).find(t=>t.name===e);if(!r){await X(e,n,`application/json`);return}let i=await Y(r.id),a=t.merge(n,i);a!==i&&await Z(r.id,a,`application/json`),a!==n&&await t.writeLocal(a)}catch(t){console.error(`Background merge sync failed for ${e}:`,t)}},2e3))}function _r(){J()&&A().syncEnabled&&(or&&clearTimeout(or),or=setTimeout(async()=>{try{let e=await it();if(!e)return;let t=br(e),n=(await Qn()).find(e=>e.name===C);n?await Z(n.id,e,`application/json`,t):await X(C,e,`application/json`,t)}catch(e){console.error(`Background synced settings upload failed:`,e)}},2e3))}async function vr(e){if(J()&&A().syncEnabled)try{let t=await Qn(),{manifest:n,fileId:r}=await fr(t);n.deleted[e]=k(),await pr(n,r);let i=t.find(t=>t.name===e);i&&await $n(i.id)}catch(e){console.error(`Background sync deletion failed:`,e)}}function yr(e){let t=e.match(/^(.+)_(\d{4}-\d{2}-\d{2})\.toml$/);return t?{formId:t[1],date:t[2]}:null}function br(e){try{let t=JSON.parse(e);if(typeof t._updated_at==`string`)return t._updated_at}catch{}}async function Q(e){let t=we(),n=I(),r=A(),i=await ot(),a=`Not available in this browser`;t&&(a=await P()?`Connected (folder chosen)`:`Available but no folder chosen`);let s=J(),c=Yn(),l=!!v,u=r.lastSyncedAt?new Date(r.lastSyncedAt).toLocaleString():`Never`;e.innerHTML=`
    <div class="settings-view">
      <header class="editor-header">
        <div class="editor-header-left">
          <a href="${o({view:`home`})}" class="btn btn-secondary btn-back">&larr; Back</a>
          <h2>Settings</h2>
        </div>
      </header>

      <section class="settings-section">
        <h3>Storage</h3>
        <dl class="settings-info">
          <div>
            <dt>Active backend</dt>
            <dd>${n===`fsa`?`File System Access API`:`IndexedDB (browser storage)`}</dd>
          </div>
          <div>
            <dt>File System Access</dt>
            <dd>${a}</dd>
          </div>
        </dl>
        ${t?`<button id="fsa-choose-btn" class="btn">Choose / Change Folder</button>`:`<p class="settings-note">File System Access API is not available. Using browser storage (IndexedDB).
               Your data persists in this browser but is <strong>not backed up automatically</strong>.
               Use the export feature below regularly.</p>`}
      </section>

      <section class="settings-section">
        <h3>Google Drive Sync</h3>
        ${l?s?`
                <dl class="settings-info">
                  <div>
                    <dt>Account</dt>
                    <dd>${c??`Signed in`}</dd>
                  </div>
                  <div>
                    <dt>Last synced</dt>
                    <dd id="last-synced-display">${u}</dd>
                  </div>
                </dl>
                <div class="settings-actions">
                  <div class="settings-action">
                    <button id="sync-now-btn" class="btn" ${dr()?`disabled`:``}>
                      ${dr()?`Syncing…`:`Sync Now`}
                    </button>
                    <p class="settings-help" id="sync-status-text">
                      Sync fills between this device and Google Drive.
                    </p>
                  </div>
                  <div class="settings-action">
                    <button id="sign-out-btn" class="btn btn-secondary">Sign Out</button>
                    <p class="settings-help">Disconnect Google account. Local data is not affected.</p>
                  </div>
                </div>
              `:r.syncEnabled?`
                  <dl class="settings-info">
                    <div>
                      <dt>Account</dt>
                      <dd>${r.googleEmail??`Previously signed in`}</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>Session expired</dd>
                    </div>
                    <div>
                      <dt>Last synced</dt>
                      <dd>${u}</dd>
                    </div>
                  </dl>
                  <div class="settings-actions">
                    <div class="settings-action">
                      <button id="sign-in-btn" class="btn">Re-authorize</button>
                      <p class="settings-help">Your Google session has expired. Re-authorize to resume syncing.</p>
                    </div>
                    <div class="settings-action">
                      <button id="sign-out-btn" class="btn btn-secondary">Disconnect</button>
                      <p class="settings-help">Remove Google account connection. Local data is not affected.</p>
                    </div>
                  </div>
                `:`
                  <p>Sync your fills across devices via your Google account.
                     Data is stored in a hidden app-specific folder that only this app can access.</p>
                  <div class="settings-actions">
                    <div class="settings-action">
                      <button id="sign-in-btn" class="btn">Sign in with Google</button>
                      <p class="settings-help">Connects to Google Drive for cross-device sync.</p>
                    </div>
                  </div>
                `:`<p class="settings-note">Google Drive sync is not configured. A Google Cloud OAuth client ID
               must be set in <code>src/constants.ts</code> to enable sync. See
               <code>doc/GoogleDriveSync.md</code> for setup instructions.</p>`}
      </section>

      <section class="settings-section">
        <h3>Data Management</h3>
        <div class="settings-actions">
          <div class="settings-action">
            <label class="settings-toggle">
              <input type="checkbox" id="autosave-checkbox"${i.autosaveEnabled?` checked`:``}>
              Auto-save forms
            </label>
            <p class="settings-help">Automatically save form drafts after a few seconds of inactivity.</p>
          </div>
          <div class="settings-action">
            <button id="export-btn" class="btn btn-secondary">Export All Data</button>
            <p class="settings-help">Download all fills as TOML files (includes all fields).</p>
          </div>
          <div class="settings-action">
            <button id="export-filled-btn" class="btn btn-secondary">Export for Sharing</button>
            <p class="settings-help">Download fills with only user-entered values (empty fields stripped).</p>
          </div>
          <div class="settings-action">
            <label class="btn btn-secondary file-upload-label" for="import-input">
              Import Data
              <input type="file" id="import-input" accept=".toml" multiple hidden>
            </label>
            <p class="settings-help">Import TOML fill files.</p>
          </div>
          <div class="settings-action">
            <button id="clear-btn" class="btn btn-danger">Clear Browser Storage</button>
            <p class="settings-help">Remove all fills from IndexedDB. Does not affect files saved via File System Access.</p>
          </div>
        </div>
      </section>

      <section class="settings-section">
        <h3>About</h3>
        <p>DBT Forms &mdash; fillable DBT worksheets that keep your data on your device.</p>
        <p>${r.syncEnabled?`Sync is enabled &mdash; fills are also stored in your Google Drive.`:`No data leaves your device unless you enable Google Drive sync.`}</p>
      </section>
    </div>
  `;let d=e.querySelector(`#fsa-choose-btn`);d&&d.addEventListener(`click`,async()=>{try{await ke(),await Q(e)}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;throw e}});let f=e.querySelector(`#sign-in-btn`);f&&f.addEventListener(`click`,async()=>{try{Kn(),await qn();let t=A();t.syncEnabled=!0,t.googleEmail=Yn(),Ce(t),await Q(e);try{await mr(),await Q(e)}catch(e){console.error(`Initial sync failed:`,e)}}catch(e){if(String(e).includes(`popup_closed`)||String(e).includes(`access_denied`))return;console.error(`Sign-in failed:`,e),alert(`Sign-in failed: ${e instanceof Error?e.message:`Unknown error`}`)}});let p=e.querySelector(`#sign-out-btn`);p&&p.addEventListener(`click`,()=>{Xn();let t=A();t.syncEnabled=!1,t.googleEmail=null,Ce(t),Q(e)});let m=e.querySelector(`#sync-now-btn`),h=e.querySelector(`#sync-status-text`);m&&m.addEventListener(`click`,async()=>{m.disabled=!0,m.textContent=`Syncing…`,h&&(h.textContent=`Syncing…`);try{let t=await mr();h&&(h.textContent=`Done: ${t.uploaded} uploaded, ${t.downloaded} downloaded, ${t.deleted} deleted.`);let n=e.querySelector(`#last-synced-display`);n&&(n.textContent=new Date().toLocaleString())}catch(e){h&&(h.textContent=`Sync failed: ${e instanceof Error?e.message:`Unknown error`}`)}finally{m.disabled=!1,m.textContent=`Sync Now`}}),lr(()=>{m&&(m.disabled=dr(),m.textContent=dr()?`Syncing…`:`Sync Now`)});let g=e.querySelector(`#autosave-checkbox`);g&&g.addEventListener(`change`,async()=>{let e=await ot();e.autosaveEnabled=g.checked,await st(e)}),e.querySelector(`#export-btn`)?.addEventListener(`click`,async()=>{let e=await Be();if(e.length===0){alert(`No fills to export.`);return}for(let{filename:t,content:n}of e){let e=new Blob([n],{type:`application/toml`}),r=URL.createObjectURL(e),i=document.createElement(`a`);i.href=r,i.download=t,i.click(),URL.revokeObjectURL(r)}}),e.querySelector(`#export-filled-btn`)?.addEventListener(`click`,async()=>{let e=await Ue();if(e.length===0){alert(`No fills to export.`);return}for(let{filename:t,content:n}of e){let e=new Blob([n],{type:`application/toml`}),r=URL.createObjectURL(e),i=document.createElement(`a`);i.href=r,i.download=t,i.click(),URL.revokeObjectURL(r)}}),e.querySelector(`#import-input`)?.addEventListener(`change`,async e=>{let t=e.target,n=t.files;if(!n||n.length===0)return;let r=[];for(let e of n){let t=await e.text();r.push({filename:e.name,content:t})}let i=await Ve(r);alert(`Imported ${i} fill(s).`),t.value=``}),e.querySelector(`#clear-btn`)?.addEventListener(`click`,async()=>{if(!confirm(`This will delete all fills from browser storage (IndexedDB). Files saved to disk via File System Access are not affected. Continue?`))return;await We();let t=A();t.persistenceBackend===`indexeddb`&&(t.fsaDirectoryChosen=!1),Ce(t),alert(`Browser storage cleared.`),await Q(e)})}var xr=[1,2,3,4,5,6,10,12,15,20,30,60],Sr=[[2,12],[3,8],[4,6],[6,4],[8,3],[12,2]],Cr=[0,160,200,240,280,320];function wr(e){let t=5,n=!1,r=[4,6],i=0,a=!1;e.innerHTML=`
    <div class="demo-dt-view">
      <div class="demo-dt-body">
        <div id="dtp-mount"></div>
        <p class="demo-dt-readout">Selected: <strong id="dtp-out"></strong></p>
        <div class="demo-dt-controls">
          <label>minRes
            <select id="ctl-minres">
              ${xr.map(e=>`<option value="${e}"${e===t?` selected`:``}>${e}</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-h24"${n?` checked`:``}> 24h
          </label>
          <label>grid
            <select id="ctl-grid">
              ${Sr.map(([e,t])=>`<option value="${e},${t}"${e===r[0]&&t===r[1]?` selected`:``}>${e}\u00D7${t}</option>`).join(``)}
            </select>
          </label>
          <label>clock cap
            <select id="ctl-cap">
              ${Cr.map(e=>`<option value="${e}"${e===i?` selected`:``}>${e===0?`none`:e+`px`}</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-vert"${a?` checked`:``}> vert hours
          </label>
        </div>
      </div>
    </div>
  `;let o=document.getElementById(`dtp-mount`),s=document.getElementById(`dtp-out`);function c(){return{initDatetime:new Date,minuteResolution:t,hour24:n,hourGridDims:r,maxClockDiameter:i||void 0,vertHours:a,onChange(e){s.textContent=e.toLocaleString()}}}function l(){o.innerHTML=``;let e=Dt(c());o.appendChild(e.element),s.textContent=e.getDatetime().toLocaleString()}l(),document.getElementById(`ctl-minres`).addEventListener(`change`,e=>{t=parseInt(e.target.value,10),l()}),document.getElementById(`ctl-h24`).addEventListener(`change`,e=>{n=e.target.checked,l()}),document.getElementById(`ctl-grid`).addEventListener(`change`,e=>{let[t,n]=e.target.value.split(`,`).map(Number);r=[t,n],l()}),document.getElementById(`ctl-cap`).addEventListener(`change`,e=>{i=parseInt(e.target.value,10),l()}),document.getElementById(`ctl-vert`).addEventListener(`change`,e=>{a=e.target.checked,l()})}var Tr=[1,2,3,4,5,6,10,12,15,20,30,60],Er=[[2,12],[3,8],[4,6],[6,4],[8,3],[12,2]],Dr=[0,160,200,240,280,320],Or=[15,30,45,60,90,120,180,240],kr=[400,500,600,700,800],Ar=15,jr=600;function Mr(e,t){let n=Math.round(Math.abs(t-e)/6e4),r=Math.floor(n/60),i=n%60;return r>0&&i>0?`${r}h ${i}m`:r>0?`${r}h`:`${i}m`}function Nr(e){let t=5,n=!1,r=[8,3],i=0,a=Ar,o=jr,s=!0;e.innerHTML=`
    <div class="demo-dt-view">
      <div class="demo-dtr-body">
        <div id="dtp-range-mount"></div>
        <p class="demo-dt-readout" id="dtp-range-readout"></p>
        <div class="demo-dt-controls">
          <label>minRes
            <select id="ctl-minres">
              ${Tr.map(e=>`<option value="${e}"${e===t?` selected`:``}>${e}</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-h24"${n?` checked`:``}> 24h
          </label>
          <label>grid
            <select id="ctl-grid">
              ${Er.map(([e,t])=>`<option value="${e},${t}"${e===r[0]&&t===r[1]?` selected`:``}>${e}\u00D7${t}</option>`).join(``)}
            </select>
          </label>
          <label>clock cap
            <select id="ctl-cap">
              ${Dr.map(e=>`<option value="${e}"${e===i?` selected`:``}>${e===0?`none`:e+`px`}</option>`).join(``)}
            </select>
          </label>
          <label>back min
            <select id="ctl-back">
              ${Or.map(e=>`<option value="${e}"${e===a?` selected`:``}>${e}</option>`).join(``)}
            </select>
          </label>
          <label>stack &lt;
            <select id="ctl-stack">
              ${kr.map(e=>`<option value="${e}"${e===o?` selected`:``}>${e}px</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-vert"${s?` checked`:``}> vert hours
          </label>
        </div>
      </div>
    </div>
  `;let c=document.getElementById(`dtp-range-mount`),l=document.getElementById(`dtp-range-readout`);function u(e,t){let n=Mr(e.getTime(),t.getTime()),r=t.getTime()<e.getTime();l.innerHTML=`<strong>${e.toLocaleString()}</strong> \u2192 <strong>${t.toLocaleString()}</strong> \u2014 ${n}${r?` (inverted)`:``}`}function d(){return{initDatetime:new Date,initBackMinutes:a,minuteResolution:t,hour24:n,hourGridDims:r,maxClockDiameter:i||void 0,vertHours:s,stackThresholdPx:o,onChange:u}}function f(){c.innerHTML=``;let e=Ot(d());c.appendChild(e.element),u(e.getFrom(),e.getTo())}f(),document.getElementById(`ctl-minres`).addEventListener(`change`,e=>{t=parseInt(e.target.value,10),f()}),document.getElementById(`ctl-h24`).addEventListener(`change`,e=>{n=e.target.checked,f()}),document.getElementById(`ctl-grid`).addEventListener(`change`,e=>{let[t,n]=e.target.value.split(`,`).map(Number);r=[t,n],f()}),document.getElementById(`ctl-cap`).addEventListener(`change`,e=>{i=parseInt(e.target.value,10),f()}),document.getElementById(`ctl-back`).addEventListener(`change`,e=>{a=parseInt(e.target.value,10),f()}),document.getElementById(`ctl-stack`).addEventListener(`change`,e=>{o=parseInt(e.target.value,10),f()}),document.getElementById(`ctl-vert`).addEventListener(`change`,e=>{s=e.target.checked,f()})}function Pr(e){return Number.isInteger(e)?`${ft[e]} ${e}`:String(e)}function Fr(e,t){let n=Math.round(Math.abs(t-e)/6e4),r=Math.floor(n/60),i=n%60;return r>0&&i>0?`${r}h ${i}m`:r>0?`${r}h`:`${i}m`}var Ir=!0,Lr=!0;function Rr(e){let t=Ir,n=Lr;e.innerHTML=`
    <div class="demo-dt-view">
      <div class="demo-dtr-body">
        <div id="mood-sel-mount" class="mood-sel-mount"></div>
        <p class="demo-dt-readout" id="mood-readout">No mood selected</p>
        <div id="dtp-range-mount"></div>
        <p class="demo-dt-readout" id="dtp-range-readout"></p>
        <div class="demo-dt-controls">
          <label><input type="checkbox" id="ctl-btw" checked> half-points</label>
          <label><input type="checkbox" id="ctl-modal" checked> modal (range)</label>
        </div>
      </div>
    </div>
  `;let r=document.getElementById(`mood-sel-mount`),i=document.getElementById(`mood-readout`),a=document.getElementById(`dtp-range-mount`),o=document.getElementById(`dtp-range-readout`);function s(e){if(!e){i.textContent=`No mood selected`;return}let[t,n]=e;i.textContent=t===n?Pr(t):`${Pr(t)} - ${Pr(n)}`}function c(e,t){let n=Fr(e.getTime(),t.getTime()),r=t.getTime()<e.getTime();o.innerHTML=`<strong>${e.toLocaleString()}</strong> \u2192 <strong>${t.toLocaleString()}</strong> \u2014 ${n}${r?` (inverted)`:``}`}let l=Ot({initDatetime:new Date,initBackMinutes:15,minuteResolution:5,hour24:!1,hourGridDims:[8,3],vertHours:!0,stackThresholdPx:600,onChange:c});a.appendChild(l.element),c(l.getFrom(),l.getTo());function u(){r.innerHTML=``;let e=pt({btwPoints:t,modal:n,onChange:s});r.appendChild(e.element),s(e.getValue())}u(),document.getElementById(`ctl-btw`).addEventListener(`change`,e=>{t=e.target.checked,u()}),document.getElementById(`ctl-modal`).addEventListener(`change`,e=>{n=e.target.checked,u()})}var zr=[1,2,3,4,5,6,10,12,15,20,30,60],Br=[[2,12],[3,8],[4,6],[6,4],[8,3],[12,2]],Vr=[0,160,200,240,280,320],Hr=[15,30,45,60,90,120,180,240],Ur=[400,500,600,700,800],Wr=!0,Gr=!0,Kr=5,qr=!1,Jr=[8,3],Yr=0,Xr=15,Zr=600,Qr=!0;function $r(e){let t=Wr,n=Gr,r=Kr,i=qr,a=[...Jr],o=Yr,s=Xr,c=Zr,l=Qr;e.innerHTML=`
    <div class="demo-dt-view">
      <div class="demo-dtr-body">
        <div id="mood-rec-mount"></div>
        <p class="demo-dt-readout" id="mood-rec-readout">&mdash;</p>
        <div class="demo-dt-controls">
          <label><input type="checkbox" id="ctl-btw" checked> half-points</label>
          <label><input type="checkbox" id="ctl-modal" checked> modal (range)</label>
          <label>minRes
            <select id="ctl-minres">
              ${zr.map(e=>`<option value="${e}"${e===Kr?` selected`:``}>${e}</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-h24"> 24h
          </label>
          <label>grid
            <select id="ctl-grid">
              ${Br.map(([e,t])=>`<option value="${e},${t}"${e===Jr[0]&&t===Jr[1]?` selected`:``}>${e}\u00D7${t}</option>`).join(``)}
            </select>
          </label>
          <label>clock cap
            <select id="ctl-cap">
              ${Vr.map(e=>`<option value="${e}"${e===Yr?` selected`:``}>${e===0?`none`:e+`px`}</option>`).join(``)}
            </select>
          </label>
          <label>back min
            <select id="ctl-back">
              ${Hr.map(e=>`<option value="${e}"${e===Xr?` selected`:``}>${e}</option>`).join(``)}
            </select>
          </label>
          <label>stack &lt;
            <select id="ctl-stack">
              ${Ur.map(e=>`<option value="${e}"${e===Zr?` selected`:``}>${e}px</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-vert" checked> vert hours
          </label>
        </div>
      </div>
    </div>
  `;let u=document.getElementById(`mood-rec-mount`),d=document.getElementById(`mood-rec-readout`);function f(e,t){d.innerHTML=`${t}mood: ${e.mood?e.mood[0]===e.mood[1]?String(e.mood[0]):`${e.mood[0]}-${e.mood[1]}`:`null`} &middot; note: ${e.note?`"${e.note}"`:`(none)`} &middot; from: ${e.dtrange.from.toLocaleString()} &middot; to: ${e.dtrange.to.toLocaleString()}`}function p(){u.innerHTML=``;let e=Nt({mood_opt:{btwPoints:t,modal:n},time_opt:{initDatetime:new Date,initBackMinutes:s,minuteResolution:r,hour24:i,hourGridDims:a,maxClockDiameter:o||void 0,vertHours:l,stackThresholdPx:c},onAdd(e){f(e,`<strong>[add]</strong> `)},onCancel(){d.textContent=`[cancel] pressed`}});u.appendChild(e.element)}p(),document.getElementById(`ctl-btw`).addEventListener(`change`,e=>{t=e.target.checked,p()}),document.getElementById(`ctl-modal`).addEventListener(`change`,e=>{n=e.target.checked,p()}),document.getElementById(`ctl-minres`).addEventListener(`change`,e=>{r=parseInt(e.target.value,10),p()}),document.getElementById(`ctl-h24`).addEventListener(`change`,e=>{i=e.target.checked,p()}),document.getElementById(`ctl-grid`).addEventListener(`change`,e=>{let[t,n]=e.target.value.split(`,`).map(Number);a=[t,n],p()}),document.getElementById(`ctl-cap`).addEventListener(`change`,e=>{o=parseInt(e.target.value,10),p()}),document.getElementById(`ctl-back`).addEventListener(`change`,e=>{s=parseInt(e.target.value,10),p()}),document.getElementById(`ctl-stack`).addEventListener(`change`,e=>{c=parseInt(e.target.value,10),p()}),document.getElementById(`ctl-vert`).addEventListener(`change`,e=>{l=e.target.checked,p()})}var ei=90,ti=864e5;function ni(e){let t=new Date(e);return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()}function ri(e){let t=ni(Date.now()),n=[];for(let r=e-1;r>=0;r--){let e=7+Math.sin(r/5)*1.2+(Math.random()-.5)*2.5;n.push({date:t-r*ti,hours:Math.max(2.5,Math.min(11,e))})}return n}function ii(e){let t=ni(Date.now()),n=[];for(let r=0;r<15;r++){let i=Math.floor(Math.random()*(e-2)),a=2+Math.floor(Math.random()*36),o=new Date(t-(e-1-i)*ti+8*36e5),s=new Date(o.getTime()+a*36e5),c=Math.floor(Math.random()*3),l=c+1+Math.floor(Math.random()*(5-c));n.push({note:`Demo mood ${r+1}`,mood:[c,Math.min(l,5)],dtrange:{from:k(o),to:k(s)},recorded_at:k(o)})}return n}async function ai(e){let t,n=!1;try{t=(await R()).filter(e=>!e.tombstoned_at),t.length===0&&(t=ii(ei),n=!0)}catch{t=ii(ei),n=!0}let r=Yt({showMoodRecords:!0,sleep:ri(ei),moods:t});e.innerHTML=`
    <div style="max-width:960px;margin:0 auto;padding:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h2 style="margin:0">Sleep &amp; Mood</h2>
        <a href="#/" style="font-size:13px">\u2190 Home</a>
      </div>
      <div id="sm-plot-mount"></div>
      <p style="color:#999;font-size:12px;margin-top:8px">
        Sleep: demo data. Mood: ${n?`demo data`:`your saved records`}.
      </p>
    </div>
  `,e.querySelector(`#sm-plot-mount`).appendChild(r.element)}var oi=`DBT Forms`,si=document.querySelector(`#app`);if(!si)throw Error(`Missing #app container element in document`);var $=si;async function ci(e){if(window.scrollTo(0,0),`formId`in e){let t=Sn(e.formId);document.title=t?`${t.title} — ${oi}`:oi}else document.title=oi;switch(e.view){case`home`:await jn($);break;case`new`:await Rn($,{formId:e.formId,readonly:!1});break;case`edit`:await Rn($,{formId:e.formId,date:e.date,readonly:!1});break;case`readonly`:await Rn($,{formId:e.formId,date:e.date,readonly:!0});break;case`settings`:await Q($);break;case`demo-datetime`:wr($);break;case`demo-datetime-range`:Nr($);break;case`demo-mood`:Rr($);break;case`demo-mood-record`:$r($);break;case`demo-sleep-mood`:await ai($);break}}a(e=>{ci(e).catch(e=>{console.error(`Route handling failed:`,e),$.innerHTML=`
      <div class="error-view">
        <h2>Something went wrong</h2>
        <p>${e instanceof Error?e.message:`Unknown error`}</p>
        <a href="#/" class="btn">Back to Home</a>
      </div>
    `})});