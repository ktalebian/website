interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'gray' | 'green' | 'purple';
}

export default function Tag({ children, variant = 'default' }: TagProps) {
  const variants = {
    default: 'px-3 py-1.5 bg-blue-100/80 text-blue-800 text-xs rounded-lg font-medium',
    blue: 'px-2 py-0.5 bg-blue-100/60 text-blue-700 text-xs rounded font-medium',
    gray: 'px-2 py-0.5 bg-gray-200/60 text-gray-700 text-xs rounded font-medium',
    green: 'px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full font-medium',
    purple: 'px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded font-medium'
  };

  return (
    <span className={variants[variant]}>
      {children}
    </span>
  );
}