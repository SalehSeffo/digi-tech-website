import { useEffect, useRef } from 'react';

interface DegiTechLogoProps {
  size?: number;
  variant?: 'primary' | 'slate' | 'orange' | 'dark-reversed' | 'black-reversed';
  showWordmark?: boolean;
  className?: string;
}

export function DegiTechLogo({
  size = 64,
  variant = 'primary',
  showWordmark = false,
  className = '',
}: DegiTechLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const S = size;
    canvas.width = S;
    canvas.height = S;

    ctx.clearRect(0, 0, S, S);

    // Color mapping
    const colorMap = {
      primary: '#E8762C',
      slate: '#2D3E50',
      orange: '#E8762C',
      'dark-reversed': '#E8762C',
      'black-reversed': '#D4A574',
    };

    const fg = colorMap[variant];

    const cx = S / 2;
    const cy = S / 2;
    const R = S * 0.46;
    const rW = Math.max(1.2, S * 0.028);

    // Circle ring
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = fg;
    ctx.lineWidth = rW;
    ctx.stroke();

    // Clip everything inside circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R - rW / 2, 0, Math.PI * 2);
    ctx.clip();

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Geometry: utensils cross at centre
    const angle = (20 * Math.PI) / 180;
    const totalLen = R * 1.72;
    const crossY = cy - R * 0.08;

    // ── Draw FORK ───────────────────────────────────────
    ctx.save();
    ctx.translate(cx - R * 0.14, crossY);
    ctx.rotate(-angle);

    const fLen = totalLen;
    const fTop = -fLen * 0.58;
    const fBot = fLen * 0.42;

    const tineH = fLen * 0.26;
    const tineGap = S * 0.052;
    const tineW = Math.max(0.9, S * 0.028);
    const stemW = Math.max(1.4, S * 0.048);

    // Three tines
    [-tineGap, 0, tineGap].forEach((dx) => {
      ctx.beginPath();
      ctx.moveTo(dx, fTop);
      ctx.lineTo(dx, fTop + tineH);
      ctx.strokeStyle = fg;
      ctx.lineWidth = tineW;
      ctx.stroke();
    });
    // Tine base bar
    ctx.beginPath();
    ctx.moveTo(-tineGap, fTop + tineH);
    ctx.lineTo(tineGap, fTop + tineH);
    ctx.strokeStyle = fg;
    ctx.lineWidth = tineW;
    ctx.stroke();
    // Neck + handle
    ctx.beginPath();
    ctx.moveTo(0, fTop + tineH);
    ctx.lineTo(0, fBot);
    ctx.strokeStyle = fg;
    ctx.lineWidth = stemW;
    ctx.stroke();

    ctx.restore();

    // ── Draw KNIFE ──────────────────────────────────────
    ctx.save();
    ctx.translate(cx + R * 0.14, crossY);
    ctx.rotate(angle);

    const kLen = totalLen;
    const kTop = -kLen * 0.58;
    const kBot = kLen * 0.42;

    const bladeH = kLen * 0.32;
    const bolH = Math.max(1.5, S * 0.034);
    const bladeBaseW = Math.max(2.0, S * 0.06);
    const bladeTipW = Math.max(0.8, S * 0.016);

    // Blade (tapered, curved spine)
    ctx.beginPath();
    ctx.moveTo(-bladeTipW / 2, kTop);
    ctx.lineTo(-bladeBaseW / 2, kTop + bladeH);
    ctx.lineTo(bladeBaseW / 2, kTop + bladeH);
    ctx.quadraticCurveTo(
      bladeBaseW * 0.7,
      kTop + bladeH * 0.5,
      bladeTipW / 2,
      kTop
    );
    ctx.closePath();
    ctx.fillStyle = fg;
    ctx.fill();

    // Bolster
    const bolW = bladeBaseW * 1.55;
    ctx.fillStyle = fg;
    ctx.fillRect(-bolW / 2, kTop + bladeH, bolW, bolH);

    // Handle
    ctx.beginPath();
    ctx.moveTo(0, kTop + bladeH + bolH);
    ctx.lineTo(0, kBot);
    ctx.strokeStyle = fg;
    ctx.lineWidth = stemW;
    ctx.stroke();

    ctx.restore();
    ctx.restore(); // end clip
  }, [size, variant]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}
