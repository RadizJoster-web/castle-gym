import { RiMapPinLine, RiPhoneLine, RiMailLine } from "react-icons/ri";

export default function Contact() {
  return (
    <div>
      <h4 className="font-body text-primary mb-5">Contact</h4>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <RiMapPinLine className="text-secondary mt-1" size={18} />

          <span className="font-body text-muted">
            Jl. Kemang Raya No. 21
            <br />
            South Jakarta
          </span>
        </div>

        <div className="flex items-center gap-3">
          <RiPhoneLine className="text-secondary" size={18} />

          <span className="font-body text-muted">+62 812 3456 7890</span>
        </div>

        <div className="flex items-center gap-3">
          <RiMailLine className="text-secondary" size={18} />

          <span className="font-body text-muted">cs@castlegym.com</span>
        </div>
      </div>
    </div>
  );
}
