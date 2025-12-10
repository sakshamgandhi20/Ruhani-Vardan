import { ThemeOption, UserData } from '../types';

export const downloadCardImage = async (
  userData: UserData,
  theme: ThemeOption,
  language: string
) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // High resolution canvas
  const width = 1080;
  const height = 1080;
  canvas.width = width;
  canvas.height = height;

  // 1. Draw Background Gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  
  // Parse theme classes to approximations for canvas (since we can't use tailwind classes directly in canvas context easily without a parser)
  // We will map the theme IDs to hardcoded hex values for the download function to ensure stability
  let colorStart, colorMid, colorEnd;
  
  switch (theme.id) {
    case 'ocean':
      colorStart = '#dbeafe'; colorMid = '#bfdbfe'; colorEnd = '#a5f3fc'; break;
    case 'nature':
      colorStart = '#dcfce7'; colorMid = '#d1fae5'; colorEnd = '#99f6e4'; break;
    case 'royal':
      colorStart = '#f3e8ff'; colorMid = '#fae8ff'; colorEnd = '#fbcfe8'; break;
    case 'sunrise':
    default:
      colorStart = '#ffedd5'; colorMid = '#fed7aa'; colorEnd = '#fef08a'; break;
  }

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // 2. Draw Decorative Border
  ctx.strokeStyle = theme.borderColor;
  ctx.lineWidth = 20;
  ctx.strokeRect(40, 40, width - 80, height - 80);
  
  // Inner thin line
  ctx.strokeStyle = theme.accentColor;
  ctx.lineWidth = 4;
  ctx.strokeRect(55, 55, width - 110, height - 110);

  // 3. Header Text (Title)
  ctx.fillStyle = theme.accentColor;
  ctx.font = language === 'hi' ? 'bold 60px "Noto Sans Devanagari"' : 'bold 60px "Poppins"';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  const titleText = language === 'hi' ? "दिव्य वरदान" : "Divine Blessing";
  ctx.fillText(titleText, width / 2, 120);

  // 4. Name
  ctx.fillStyle = theme.textColor;
  ctx.font = language === 'hi' ? '600 80px "Noto Sans Devanagari"' : '600 80px "Poppins"';
  ctx.fillText(userData.name || (language === 'hi' ? 'प्रिय आत्मा' : 'Dear Soul'), width / 2, 280);

  // 5. Separator
  ctx.beginPath();
  ctx.moveTo(width / 2 - 100, 380);
  ctx.lineTo(width / 2 + 100, 380);
  ctx.strokeStyle = theme.accentColor;
  ctx.lineWidth = 3;
  ctx.stroke();

  // 6. The Vardan (Text Wrapping)
  const text = userData.vardan || "May peace be with you.";
  ctx.font = language === 'hi' ? '500 64px "Noto Sans Devanagari"' : 'italic 500 64px "Great Vibes", "Poppins"';
  // Fallback for English script font if not loaded in canvas context properly
  if (language !== 'hi' && !document.fonts.check('1em "Great Vibes"')) {
     ctx.font = 'italic 500 64px "Poppins"';
  }
  
  const maxWidth = width - 200;
  const lineHeight = 100;
  const x = width / 2;
  let y = 480;

  wrapText(ctx, text, x, y, maxWidth, lineHeight);

  // 7. Footer
  ctx.font = language === 'hi' ? '400 30px "Noto Sans Devanagari"' : '400 30px "Poppins"';
  ctx.fillStyle = theme.textColor;
  ctx.globalAlpha = 0.7;
  const footerText = language === 'hi' ? "ओम शांति" : "Om Shanti";
  ctx.fillText(footerText, width / 2, height - 100);

  // Convert to Image and Download
  const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
  const link = document.createElement('a');
  link.download = `vardan-${userData.name || 'blessing'}.jpg`;
  link.href = dataUrl;
  link.click();
};

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(' ');
  let line = '';
  const lines = [];

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);

  // Center vertically based on number of lines
  // Adjust starting Y
  const totalBlockHeight = lines.length * lineHeight;
  // We want the text block center to be roughly at Y + 100
  // But simpler is just to start drawing
  
  lines.forEach((l, i) => {
    ctx.fillText(l, x, y + (i * lineHeight));
  });
}